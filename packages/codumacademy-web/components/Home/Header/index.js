import React from "react";
import PropTypes from "prop-types";

import HeaderContent from "../HeaderContent";
import TopNavigation from "../../Shared/TopNavigation";

import withStore from "./store";

const Header = props => (
  <header>
    <TopNavigation />
    <HeaderContent
      title={props.title}
      summary={props.summary}
      callToActionText={props.isLogged ? "Ingresar" : props.callToActionText}
      callToActionUrl={props.callToActionUrl}
      imageUrl={props.imageUrl}
      imageAlt={props.imageAlt}
      isRegisterModalVisible={props.isRegisterModalVisible}
      toggleRegisterModal={
        props.isLogged ? props.goProfile : props.toggleRegisterModal
      }
    />
  </header>
);

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  goProfile: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  callToActionText: PropTypes.string.isRequired,
  callToActionUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  toggleRegisterModal: PropTypes.func.isRequired,
  isRegisterModalVisible: PropTypes.bool.isRequired
};

export default withStore(Header);
