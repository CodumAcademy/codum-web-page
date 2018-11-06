import { compose, lifecycle, withHandlers, withProps } from "recompose"; // eslint-disable-line
import { withApollo } from "react-apollo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setPartLoading } from "../../../app-state/actions/app-actions";
import { getCurrentConvocation } from "../../../app-state/actions/convocation-actions";
import { getUsersList } from "../../../app-state/actions/admin-actions";

const withRedux = () => {
  const mapStateToProps = ({
    app: { isAppLoading, isPartLoading },
    convocation: { currentConvocation },
    admin: { users }
  }) => ({
    users,
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

const withLifecycles = lifecycle({
  componentDidMount() {
    this.props.getCurrentConvocation();
    this.props.getUsersList();
  }
});

const enhance = compose(withApollo, withRedux(), withLifecycles);

export default enhance;
