import { compose, lifecycle, withHandlers, withProps, withState } from "recompose";// eslint-disable-line
import { withApollo } from "react-apollo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setPartLoading } from "../../app-state/actions/app-actions";
import { getIndividualSummary } from "../../app-state/actions/admin-actions";

import { Router } from "../../routes";

const withRedux = () => {
  const mapStateToProps = ({
    app: { isAppLoading, isPartLoading },
    convocation: { currentConvocation },
    admin: { selectedUser }
  }) => ({
    selectedUser,
    currentConvocation,
    isAppLoading,
    isPartLoading
  });

  const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators(
      {
        setPartLoading,
        getUser: userId => getIndividualSummary(props.client, userId)
      },
      dispatch
    );

  return connect(mapStateToProps, mapDispatchToProps);
};

const withLifecycles = lifecycle({
  componentDidMount() {
    const {
      router: { query }
    } = Router;
    this.props.getUser(query.id);
  }
});

const moreProps = withProps(props => {
  const { selectedUser } = props;
  const { quizUserSummaries, quizUserAnswers } = selectedUser;

  let summaries = {};
  const answers = {};
  if (selectedUser && quizUserSummaries)
    summaries = quizUserSummaries.reduce((acc, item) => {
      acc[item.quizId] = item;
      return acc;
    }, {});
  if (selectedUser && quizUserAnswers) {
    quizUserAnswers.forEach(item => {
      if (!answers[item.quizQuestion.quizId])
        answers[item.quizQuestion.quizId] = [];
      answers[item.quizQuestion.quizId].push(item);
    });
  }
  return {
    summaries,
    answers
  };
});

const funcs = withHandlers({
  calcPercent: () => (current, total) => parseInt(current * 100 / total, 10),
  formatDate: () => strDate => {
    const date = new Date(strDate);
    return `${date.getDate() + 1}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }
});

const enhance = compose(
  withState("itemSelected", "setItemSelected", 0),
  withApollo,
  withRedux(),
  moreProps,
  funcs,
  withLifecycles
);

export default enhance;
