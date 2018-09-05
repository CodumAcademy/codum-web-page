import { connect } from "react-redux";
import Router from "next/router";

const withRedux = () => {
  const mapStateToPros = ({ user }) => ({
    isLogged: (user && user.user && user.user.id) || false
  });
  const mapDispathToProps = () => ({
    goProfile: () => Router.push({ pathname: "/perfil" })
  });

  return connect(mapStateToPros, mapDispathToProps);
};

export default withRedux();
