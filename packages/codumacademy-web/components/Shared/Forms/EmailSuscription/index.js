import React from "react";
import PropTypes from "prop-types";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { compose, withState, withHandlers } from "recompose";

import GenericButton from "../../UI/Buttons/GenericButton";
import { Label, Input, Message, A } from "./styles";

const url = process.env.MAILCHIMP_SUBSCRIBE_URL;

const EmailSuscriptionForm = ({ onSubmit, onChange, emailData }) => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, message, status }) => (
      <div>
        <form
          method="post"
          onSubmit={e => {
            onSubmit(e, subscribe);
          }}
        >
          <Label htmlFor="email-suscription">
            <Input
              className="generic-input"
              type="email"
              placeholder="Ingresa aquí correo electrónico"
              id="email-suscription"
              autoComplete="email"
              onChange={onChange}
              value={emailData}
              required
            />
          </Label>
          <Label terms htmlFor="terms-email">
            <Input
              className="generic-input"
              type="checkbox"
              id="terms-email"
              autoComplete="terms-email"
              required
            />
            <span>
              <A
                target="_blank"
                href="/politica-tratamiento-de-datos-personales"
              >
                Acepto el tratamiento de mis datos personales
              </A>
            </span>
          </Label>
          <Message
            status={status}
            dangerouslySetInnerHTML={{
              __html:
                status === "success" ? "!Gracias por suscribirte!" : message
            }}
          />

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
    )}
  />
);

EmailSuscriptionForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  emailData: PropTypes.string
};

EmailSuscriptionForm.defaultProps = {
  emailData: ""
};

const enhance = compose(
  withState("emailData", "setEmailData", ""),
  withHandlers({
    onChange: props => event => {
      props.setEmailData(event.target.value);
    },
    onSubmit: ({ emailData, setEmailData }) => (e, subscribe) => {
      e.preventDefault();
      subscribe({
        EMAIL: emailData
      });
      setEmailData("");
    }
  })
);

export default enhance(EmailSuscriptionForm);
