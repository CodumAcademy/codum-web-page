import React from "react";
import PropTypes from "prop-types";

import SimpleModal from "../../UI/SimpleModal";
import GenericButton from "../../UI/Buttons/GenericButton";

import H3 from "./styles";

const SavedDataModal = props => (
  <SimpleModal isVisible={props.isVisible} toggleModal={props.toggleModal}>
    <H3>¡Datos guardados con éxito!</H3>
    <GenericButton
      action={props.toggleModal}
      customStyle="
        margin: 0 auto;
        display: block;
        margin-top: 1rem;
      "
      width="42%"
    >
      ACEPTAR
    </GenericButton>
  </SimpleModal>
);

SavedDataModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default SavedDataModal;
