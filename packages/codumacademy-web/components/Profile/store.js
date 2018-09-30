import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setCurrentTab } from "../../app-state/actions/user-actions";

const withRedux = () => {
  const mapStateToPros = ({ user, app }) => ({
    user: user.user || {},
    isLoading: app.isPartLoading,
    currentTabSelected: user.currentTabSelected
  });

  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        setCurrentTab
      },
      dispatch
    );

  return connect(mapStateToPros, mapDispatchToProps);
};

export default withRedux();
