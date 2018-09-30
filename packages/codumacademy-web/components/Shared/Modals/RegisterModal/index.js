import React from "react";
import PropTypes from "prop-types";

import SimpleModal from "../../UI/SimpleModal";
import RegisterForm from "../../Forms/Auth/RegisterForm";

import H3 from "./styles";

const RegisterModal = props => (
  <SimpleModal isVisible={props.isVisible} toggleModal={props.toggleModal}>
    <H3>¡Únete!</H3>
    <RegisterForm toggleModal={props.toggleModal} />
  </SimpleModal>
);

RegisterModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default RegisterModal;
