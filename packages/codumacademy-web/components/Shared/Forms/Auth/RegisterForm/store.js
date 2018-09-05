import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { graphql, withApollo } from "react-apollo";
import { withFormik } from "formik";
import swal from "sweetalert2";

import validationSchema from "./schema";
import persistToken from "../../../../../utils/apollo/persist-token";

import signUpMutation from "./mutations/sign-up.graphql";
import getStatesQuery from "./queries/states.graphql";
import getCitiesQuery from "./queries/cities.graphql";
import { setUser } from "../../../../../app-state/actions/user-actions";

const defaultCountryId = 47; // Colombia por defecto

const errorMessage = () =>
  swal({
    title: "Ócurrio un error",
    text: "Verifica tus datos e intentalo nuevamente",
    type: "error",
    confirmButtonText: "Verificar"
  });

const selectSearch = async (queryOpts, dataKey, client, cb) => {
  try {
    const { data } = await client.query(queryOpts);
    if (data && data[dataKey] && data[dataKey].rows) {
      const options = data[dataKey].rows.map(item => ({
        value: item.id,
        label: item.name
      }));

      cb(null, {
        options,
        complete: true
      });
      return;
    }
    cb(null, {
      options: [],
      complete: true
    });
  } catch (e) {
    console.error(e);// eslint-disable-line
  }
};

const getStates = props => async (text = "", cb) => {
  const where = JSON.stringify({
    countryId: defaultCountryId,
    name: {
      $like: `%${text}%`
    }
  });
  const queryOpts = {
    query: getStatesQuery,
    variables: {
      where
    }
  };
  await selectSearch(queryOpts, "states", props.client, cb);
};

const getCities = props => async (text = "", cb) => {
  const where = JSON.stringify({
    stateId: props.currentState.value,
    name: {
      $like: `%${text}%`
    }
  });
  const queryOpts = {
    query: getCitiesQuery,
    variables: {
      where
    }
  };
  await selectSearch(queryOpts, "cities", props.client, cb);
};

const onSelectChange = props => key => data => {
  if (key === "stateId") props.setCurrentState(data);
  else props.setCurrentCity(data);

  props.setFieldValue(key, data.value);
};

const formConfig = {
  validateOnBlur: true,
  validateOnChange: true,
  validationSchema,
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const variables = values;
    delete variables.client;
    delete variables.currentCity;
    delete variables.client;
    props
      .signUpMutation({ variables })
      .then(response => {
        setSubmitting(false);
        if (response) {
          const { token, user } = response.data.signup;
          persistToken.willSetAccessToken(token);
          props.setUser(user);
          swal({
            title: "¡Datos guardados con éxito!",
            type: "success",
            confirmButtonText: "Cerrar"
          });
          resetForm({});
          props.toggleModal();
          window.location = "/perfil";
        } else errorMessage();
      })
      .catch(() => {
        errorMessage();
        setSubmitting(false);
      });
  }
};

const funcs = withHandlers({
  getStates,
  getCities,
  onSelectChange
});

const signUp = graphql(signUpMutation, {
  name: "signUpMutation"
});

const withRedux = () => {
  const mapStateToPros = state => state;

  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        setUser
      },
      dispatch
    );

  return connect(mapStateToPros, mapDispatchToProps);
};

const enhance = compose(
  signUp,
  withRedux(),
  withApollo,
  withState("currentState", "setCurrentState", false),
  withState("currentCity", "setCurrentCity", false),
  withFormik(formConfig),
  funcs
);

export default enhance;
