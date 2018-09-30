import { graphql } from "react-apollo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose, withState, withHandlers } from "recompose";

import { setUser } from "../../../../app-state/actions/user-actions";
import persistToken from "../../../../utils/apollo/persist-token";

import loginMutation from "./mutations/login.graphql";

import { errorMessage } from "../../../../utils/msgs";

const funcs = withHandlers({
  handleSubmit: props => async e => {
    e.preventDefault();

    props.setLoading(true);

    try {
      const variables = {
        email: props.email,
        password: props.password
      };

      const { data } = await props.loginMutation({ variables });

      props.setLoading(false);

      if (data && data.login) {
        const { token } = data.login;
        persistToken.willSetAccessToken(token);
        window.location = "/perfil";
        return;
      }
      errorMessage("Email o contraseña incorrectos");
    } catch (err) {
      props.setLoading(false);
      errorMessage("Email o contraseña incorrectos");
    }
  },
  handleChange: props => key => e => {
    if (key === "email") props.setEmail(e.target.value);
    else props.setPassword(e.target.value);
  }
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

const login = graphql(loginMutation, {
  name: "loginMutation"
});

const enhance = compose(
  login,
  withRedux(),
  withState("isRegisterModalVisible", "toggleRegisterModal", false),
  withState(
    "isRecoverPasswordModalVisible",
    "toggleRecoverPasswordModal",
    false
  ),
  withState("email", "setEmail", ""),
  withState("password", "setPassword", ""),
  withState("error", "setError", ""),
  withState("isLoading", "setLoading", false),
  funcs
);

export default enhance;
