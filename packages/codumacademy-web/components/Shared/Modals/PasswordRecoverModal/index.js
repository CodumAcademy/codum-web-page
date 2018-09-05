import React from "react";
import PropTypes from "prop-types";

import SimpleModal from "../../UI/SimpleModal";

import { H3 } from "./styles";

import PasswordRecoverForm from "../../Forms/PasswordRecover";

const PasswordRecover = props => (
  <SimpleModal isVisible={props.isVisible} toggleModal={props.toggleModal}>
    <H3>Recuperar contraseña</H3>
    <PasswordRecoverForm toggleModal={props.toggleModal} />
  </SimpleModal>
);

PasswordRecover.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default PasswordRecover;
