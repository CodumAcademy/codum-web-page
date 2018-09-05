import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { logout } from "../../../app-state/actions/user-actions";

const mapStateToProps = ({ user }) => ({
  user: user.user || {},
  isFetching: user.isFetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps);
