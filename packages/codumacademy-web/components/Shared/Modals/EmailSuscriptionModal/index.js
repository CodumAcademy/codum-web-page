import React from "react";
import PropTypes from "prop-types";

import SimpleModal from "../../UI/SimpleModal";

import { H3, Paragraph } from "./styles";

import EmailSuscriptionForm from "../../Forms/EmailSuscription";

const EmailSuscriptionModal = props => (
  <SimpleModal isVisible={props.isVisible} toggleModal={props.toggleModal}>
    <H3>¡Bienvenido!</H3>
    <Paragraph>Para recibir información importante sobre <strong>fechas de inscripción</strong> y <strong>noticias</strong>, déjanos tu correo electrónico</Paragraph>{/* eslint-disable-line */}
    <EmailSuscriptionForm />
  </SimpleModal>
);

EmailSuscriptionModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default EmailSuscriptionModal;
