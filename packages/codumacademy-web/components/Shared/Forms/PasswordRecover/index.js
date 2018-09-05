import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { compose, withState, withHandlers } from "recompose";

import { successMessage } from "../../../../utils/msgs";

import generatePasswordMutation from "./mutations/generate-new-password.graphql";

import GenericButton from "../../UI/Buttons/GenericButton";
import { Label, Input } from "./styles";

const EmailSuscriptionForm = ({ onSubmit, onChange, emailData }) => (
  <div>
    <form method="post" onSubmit={onSubmit}>
      <Label htmlFor="password-recover">
        <Input
          className="generic-input"
          type="email"
          placeholder="Ingresa aquí correo electrónico"
          id="password-recover"
          autoComplete="email"
          onChange={onChange}
          value={emailData}
          required
        />
      </Label>
      <GenericButton
        action={() => {}}
        customStyle="
          margin: 0 auto;
          display: block;
          margin-top: 1rem;
        "
        width="42%"
      >
        ACEPTAR
      </GenericButton>
    </form>
  </div>
);

EmailSuscriptionForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  emailData: PropTypes.string
};

EmailSuscriptionForm.defaultProps = {
  emailData: ""
};

const setNewPasswordMutation = graphql(generatePasswordMutation, {
  name: "setNewPassword"
});

const enhance = compose(
  withState("emailData", "setEmailData", ""),
  setNewPasswordMutation,
  withHandlers({
    onChange: props => event => {
      props.setEmailData(event.target.value);
    },
    onSubmit: ({
      emailData,
      setEmailData,
      setNewPassword,
      toggleModal
    }) => async e => {
      e.preventDefault();

      await setNewPassword({
        variables: { email: emailData }
      });

      successMessage("Cambio de contraseña", "Por favor revisa tu correo");

      setEmailData("");

      toggleModal();
    }
  })
);

export default enhance(EmailSuscriptionForm);
