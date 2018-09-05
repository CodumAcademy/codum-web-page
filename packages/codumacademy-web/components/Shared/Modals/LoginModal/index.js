import React from "react";
import PropTypes from "prop-types";

import SimpleModal from "../../UI/SimpleModal";
import GenericButton from "../../UI/Buttons/GenericButton";
import RegisterModal from "../RegisterModal";
import PasswordRecoverModal from "../PasswordRecoverModal";

import withStore from "./store";

import { H3, H5, Label, Input, Anchor } from "./styles";
import CircleLoading from "../../UI/Loaders/circle";

const LoginModal = props => (
  <SimpleModal isVisible={props.isVisible} toggleModal={props.toggleModal}>
    <H3>¡Ingresar!</H3>
    <form method="post" onSubmit={props.handleSubmit}>
      <Label htmlFor="email">
        <H5>Correo electrónico</H5>
        <Input
          className="generic-input"
          type="email"
          placeholder="Ingresa aquí correo electrónico"
          id="email"
          autoComplete="email"
          onChange={props.handleChange("email")}
          required
        />
      </Label>
      <Label htmlFor="password">
        <H5>Contraseña</H5>
        <Input
          className="generic-input"
          type="password"
          placeholder="Ingresa aquí contraseña"
          id="password"
          autoComplete="current-password"
          onChange={props.handleChange("password")}
          required
        />
      </Label>
      <Anchor onClick={props.toggleRecoverPasswordModal}>
        ¿Olvidaste tu contraseña?
      </Anchor>
      <Anchor onClick={props.toggleRegisterModal}>¿No estás registrado?</Anchor>
      {props.isLoading && <CircleLoading />}
      {!props.isLoading && (
        <GenericButton
          action={props.handleSubmit}
          customStyle="
            margin: 0 auto;
            display: block;
            margin-top: 1rem;
          "
          width="42%"
        >
          INGRESAR
        </GenericButton>
      )}
    </form>
    <RegisterModal
      isVisible={props.isRegisterModalVisible}
      toggleModal={() =>
        props.toggleRegisterModal(!props.isRegisterModalVisible)
      }
      onSubmit={() => {}}
    />
    <PasswordRecoverModal
      isVisible={props.isRecoverPasswordModalVisible}
      toggleModal={() =>
        props.toggleRecoverPasswordModal(!props.isRecoverPasswordModalVisible)
      }
      onSubmit={() => {}}
    />
  </SimpleModal>
);

LoginModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isRegisterModalVisible: PropTypes.bool.isRequired,
  isRecoverPasswordModalVisible: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleRegisterModal: PropTypes.func.isRequired,
  toggleRecoverPasswordModal: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default withStore(LoginModal);
