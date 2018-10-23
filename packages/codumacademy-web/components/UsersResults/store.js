import { compose, lifecycle, withHandlers, withState } from "recompose";
import { withApollo } from "react-apollo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import * as ExportJsonExcel from "js-export-excel";

import { setPartLoading } from "../../app-state/actions/app-actions";
import { getCurrentConvocation } from "../../app-state/actions/convocation-actions";
import { getUsersList } from "../../app-state/actions/admin-actions";
import getUsersListQuery from "../../app-state/query/get-users-complete-list.graphql";

const parseAnswersJSON = string => {
  const parsed = JSON.parse(string);
  delete parsed.multiple;
  const keys = Object.keys(parsed);
  const data = keys.map(key => parsed[key]);
  return data;
};

const getAge = date => {
  const today = new Date();
  const birtday = new Date(date);
  let age = today.getFullYear() - birtday.getFullYear();
  const m = today.getMonth() - birtday.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birtday.getDate())) {
    age -= 1;
  }

  return age;
};

const getUserResult = (currentConvocation, user) => {
  const { convocationRequirements } = currentConvocation;
  const { quizUserSummaries } = user;

  let newUser;

  if (convocationRequirements && convocationRequirements.length > 0) {
    const someFailed = convocationRequirements.some(convocationRequirement => {
      let status = {
        isFailed: false,
        message: "En progreso"
      };
      const { requiredApprove, quizId, withQuiz } = convocationRequirement;
      if (withQuiz) {
        // buscar en los summaries si ya hizo el examen y lo aprobó
        const summary = quizUserSummaries.find(item => item.quizId === quizId);
        if (summary && summary.finished) {
          // Si no es requerido entonces no debe validarse si lo aprobó
          if (!requiredApprove) {
            status = {
              isFailed: false,
              message: "En progreso"
            };
            newUser = Object.assign(
              {},
              {
                ...user,
                status
              }
            );
            return false;
          }
          // Si 80% de respuestas OK
          const { successAnswers, totalAnswers } = summary;

          const percent = parseInt(successAnswers * 100 / totalAnswers, 10);

          if (percent >= 80) {
            status = {
              isFailed: false,
              success: true,
              message: "Clasificó"
            };
            newUser = Object.assign(
              {},
              {
                ...user,
                status
              }
            );
            return false;
          }
          status = {
            isFailed: true,
            message: "No clasificó"
          };
          newUser = Object.assign(
            {},
            {
              ...user,
              status
            }
          );
          return true;
        }
      }
      newUser = Object.assign(
        {},
        {
          ...user,
          status
        }
      );
      return false;
    });
    return Object.assign({}, { ...newUser, isFailed: someFailed });
  }
};

const downloadExcel = props => async () => {
  props.setDownloadingState(true);
  const variables = { perPage: 0, query: JSON.stringify({ isAdmin: false }) };
  const result = await props.client.query({
    query: getUsersListQuery,
    variables
  });
  if (!result.data && !result.data.users) return;

  const users = result.data.users.rows;
  const questions = result.data.quizQuestions.rows;
  // const dataToExport = [];
  const { selectedRequirements } = props;

  const sheets = [];

  // < General report >
  const generalSheet = {
    sheetName: "General",
    sheetHeader: [
      "Nombre",
      "Teléfono",
      "Email",
      "Identificación",
      "¿Cómo nos encontró?",
      "Universidad",
      "Edad",
      "Estado"
    ],
    data: []
  };

  generalSheet.data = users
    .map(user => getUserResult(props.currentConvocation, user))
    .reduce(
      (acc, item) =>
        acc.concat({
          name: item.fullName,
          phone: item.phone,
          email: item.email,
          identityDoc: item.identityDoc,
          howDidYouFindUs: item.howDidYouFindUs,
          university: item.university,
          age: getAge(item.birtday),
          message: item.status.message
        }),
      []
    );
  sheets.push(generalSheet);
  // < General report >

  // < Sheet preguntas >
  const sheetQuestions = {
    sheetName: "Preguntas",
    sheetHeader: ["Código", "Texto pregunta"],
    data: []
  };
  sheetQuestions.data = questions.reduce(
    (acc, item) => acc.concat({ id: item.id, text: item.title }),
    []
  );
  sheets.push(sheetQuestions);
  // < / Sheet preguntas >
  // < Sheet respuestas >
  const sheetAnswers = {
    sheetName: "Respuestas",
    sheetHeader: ["Código", "Texto respuesta"],
    data: []
  };
  sheetAnswers.data = questions.reduce((acc, question) => {
    const newItems = question.quizAnswers.reduce(
      (accum, item) => accum.concat({ id: item.id, text: item.answer }),
      []
    );
    return acc.concat(newItems);
  }, []);
  sheets.push(sheetAnswers);
  // < / Sheet respuestas >

  // < Preguntas con respuestas de usuarios >
  Object.keys(selectedRequirements).forEach(key => {
    const requirement = selectedRequirements[key];
    const finalObj = {
      sheetName: requirement.description.slice(0, 30),
      sheetHeader: [],
      data: []
    };
    const { quizId } = requirement;

    const quizQuestions = questions.filter(item => item.quizId === quizId);

    // Modelar data para primera fila
    const questionsRow = quizQuestions.reduce(
      (acc, question) => {
        acc[question.id] = question.id;
        return acc;
      },
      {
        name: "Nombre"
      }
    );

    // <
    const rows = users.reduce((acc, user) => {
      // eslint-disable-line
      const newObj = Object.assign({}, { name: user.fullName }); // eslint-disable-line
      Object.keys(questionsRow).forEach(keyObj => {
        const questionAnswer = user.quizUserAnswers.find(
          answer =>
            keyObj !== "name" && answer.quizQuestionId === parseInt(keyObj, 10)
        );
        // Si encuentra la respuesta y es de opción simple
        if (questionAnswer && !questionAnswer.multiple)
          newObj[keyObj] = questionAnswer.quizAnswerId;

        // si encuentra la respuesta y es de opción multiple
        if (questionAnswer && questionAnswer.multiple) {
          newObj[keyObj] = parseAnswersJSON(questionAnswer.answers).reduce(
            (accum, answer) =>
              `${accum}${answer.answer} - ${
                answer.answer.allowAddicionalText
                  ? `${answer.answer.addicionalText} - `
                  : ""
              }`,
            ""
          );
        }

        // Si no encuentra la respuesta
        if (!questionAnswer && keyObj !== "name")
          newObj[keyObj] = "Sin responder";
      });
      return acc.concat(newObj);
    }, []);

    finalObj.data = [...rows];
    finalObj.sheetHeader = Object.keys(questionsRow).reduce(
      (acc, rowKey) => acc.concat(questionsRow[rowKey]),
      []
    );

    sheets.push(finalObj);
  });
  // </ Preguntas con respuestas de usuarios >
  const date = new Date();
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
  const fileName = `${date.getDate() + 1}-${date.getMonth() +
    1}-${date.getFullYear()} ${time}`;
  const opts = { fileName };
  opts.datas = sheets.reduce(
    (acc, item) =>
      acc.concat({
        sheetData: item.data,
        sheetName: item.sheetName,
        sheetHeader: item.sheetHeader
      }),
    []
  );

  const ExportJsonExcel = require("js-export-excel"); // eslint-disable-line

  const toExcel = new ExportJsonExcel(opts);
  toExcel.saveExcel();

  props.setDownloadingState(false);
};

const onCheckRequirement = props => item => e => {
  const obj = Object.assign({}, props.selectedRequirements);
  if (!obj[item.id]) obj[item.id] = {};

  if (e.target.checked) obj[item.id] = item;
  else delete obj[item.id];
  props.setSelectedRequirements(obj);
};

const funcs = withHandlers({
  downloadExcel,
  onCheckRequirement
});

const withLifecycles = lifecycle({
  componentDidMount() {
    this.props.getCurrentConvocation();
    this.props.getUsersList();
  }
});

const withRedux = () => {
  const mapStateToProps = ({
    app: { isAppLoading, isPartLoading },
    convocation: { currentConvocation },
    admin: { users }
  }) => ({
    users: users.map(user => getUserResult(currentConvocation, user)),
    currentConvocation,
    isAppLoading,
    isPartLoading
  });

  const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators(
      {
        setPartLoading,
        getCurrentConvocation: () => getCurrentConvocation(props.client),
        getUsersList: () => getUsersList(props.client)
      },
      dispatch
    );

  return connect(mapStateToProps, mapDispatchToProps);
};

const enhance = compose(
  withApollo,
  withState("selectedRequirements", "setSelectedRequirements", {}),
  withState("answersSheets", "setAnswersSheets", []),
  withState("downloading", "setDownloadingState", false),
  withState("showList", "setShowList", false),
  withRedux(),
  funcs,
  withLifecycles
);

export default enhance;
