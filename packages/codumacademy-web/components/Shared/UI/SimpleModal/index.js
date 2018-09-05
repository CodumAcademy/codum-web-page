import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import {
  Container,
  ModalOverlay,
  ModalContainer,
  ModalContent,
  CloseButton
} from "./styles";

const SimpleModal = props => (
  <Container isVisible={props.isVisible}>
    <Fade when={props.isVisible}>
      <ModalOverlay borderLess={props.borderLess}>
        <ModalContainer borderLess={props.borderLess}>
          <CloseButton
            borderLess={props.borderLess}
            onClick={props.toggleModal}
          >
            X
          </CloseButton>
          <ModalContent customStyle={props.modalStyle}>
            <div>{props.children}</div>
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>
    </Fade>
  </Container>
);

SimpleModal.defaultProps = {
  modalStyle: "",
  borderLess: false
};

SimpleModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalStyle: PropTypes.string,
  borderLess: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default SimpleModal;
