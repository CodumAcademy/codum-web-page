import { lifecycle } from "recompose";
import Router from "next/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withApollo, compose } from "react-apollo";

import { verifyUser } from "../../app-state/actions/user-actions";

const withRedux = () => {
  const mapStateToPros = ({ user, app }) => ({
    user: user.user,
    isLoading: app.isAuthLoading
  });

  const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators(
      {
        verifyUser: () => verifyUser(props.client, props.admin)
      },
      dispatch
    );

  return connect(mapStateToPros, mapDispatchToProps);
};

const withLifecycles = lifecycle({
  componentDidMount() {
    const goHome = () => Router.push({ pathname: "/" });
    this.props
      .verifyUser()
      .then(user => {
        if (!user) goHome();
      })
      .catch(() => {
        goHome();
      });
  }
});

const enhance = compose(withApollo, withRedux(), withLifecycles);

export default enhance;
