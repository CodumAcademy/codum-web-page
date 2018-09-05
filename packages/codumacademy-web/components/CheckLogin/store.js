import { lifecycle } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withApollo, compose } from "react-apollo";

import { verifyUser } from "../../app-state/actions/user-actions";
import { setPartLoading } from "../../app-state/actions/app-actions";

const withRedux = () => {
  const mapStateToPros = ({ user, app }) => ({
    user: user.user,
    isLoading: app.isPartLoading
  });

  const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators(
      {
        verifyUser: () => verifyUser(props.client),
        setPartLoading
      },
      dispatch
    );

  return connect(mapStateToPros, mapDispatchToProps);
};

const withLifecycles = lifecycle({
  componentDidMount() {
    this.props.verifyUser();
  }
});

const enhance = compose(withApollo, withRedux(), withLifecycles);

export default enhance;
