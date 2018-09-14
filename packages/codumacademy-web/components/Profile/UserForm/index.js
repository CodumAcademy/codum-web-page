/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Async } from "react-select";

import reselectCss from "react-select/dist/react-select.css";

import { FormContainer } from "../../Shared/Forms/Auth/RegisterForm/styles";
import { UserFormContainer, Title, ButtonContainer, Overlay } from "./styles";

import GenericButton from "../../Shared/UI/Buttons/GenericButton";
import CircleLoading from "../../Shared/UI/Loaders/circle";

import withStore from "./store";

const UserForm = props => (
  <UserFormContainer>
    {props.isLoading && (
      <Overlay>
        <CircleLoading />
      </Overlay>
    )}
    <Title>Tus datos</Title>
    <FormContainer>
      <Helmet>
        <style>{reselectCss}</style>
      </Helmet>
      <label className="fullname width-100" htmlFor="fullName">
        <span>Nombres y apellidos*</span>
        <input
          name="fullName"
          className="generic-input"
          type="text"
          placeholder="Ingresa aquí tus nombres y apellidos"
          id="fullName"
          autoComplete="name"
          onChange={props.handleChange("fullName")}
          value={props.fullName}
          onBlur={props.onInputReady("fullName")}
          disabled={!props.isEditing}
        />
      </label>
      <label className="birtday width-50" htmlFor="birtday">
        <span>Fecha de nacimiento*</span>
        <input
          className="generic-input"
          type="date"
          id="birtday"
          autoComplete="birtday"
          name="birtday"
          onChange={props.handleChange("birtday")}
          value={props.birtday}
          disabled={!props.isEditing}
        />
      </label>
      <div className="offset-50" />
      <label
        className="document-type width-50 margin-2-percent"
        htmlFor="id-type"
      >
        <span>Tipo de documento*</span>
        <div className={`select-wrapper ${!props.isEditing ? "disabled" : ""}`}>
          <select
            className="generic-input"
            id="id-type"
            name="typeIdentityDocId"
            onChange={props.handleChange("typeIdentityDocId")}
            value={props.typeIdentityDocId}
            disabled={!props.isEditing}
          >
            <option value>--</option>
            <option value="1">CC</option>
            <option value="2">TI</option>
          </select>
        </div>
      </label>
      <label className="document-id width-50" htmlFor="id">
        <span>Número de documento*</span>
        <input
          className="generic-input"
          type="text"
          placeholder="Ingresa número de documento"
          id="id"
          autoComplete="id"
          name="identityDoc"
          onChange={props.handleChange("identityDoc")}
          value={props.identityDoc}
          onBlur={props.onInputReady("identityDoc")}
          disabled={!props.isEditing}
        />
      </label>
      <label className="city width-50 margin-2-percent" htmlFor="state">
        <span>Departamento de nacimiento*</span>
        <Async
          className={`generic-input select ${
            !props.isEditing ? "disabled" : ""
          }`}
          name="states"
          loadOptions={props.getStates}
          placeholder="Ingresa Departamento de nacimiento"
          searchPromptText="Buscar..."
          onChange={props.onSelectChange("stateId")}
          value={props.currentState}
          instanceId="states"
          disabled={!props.isEditing}
        />
      </label>
      <label className="town width-50" htmlFor="city">
        <span>Ciudad de nacimiento*</span>
        <Async
          className={`generic-input select ${
            !props.isEditing ? "disabled" : ""
          }`}
          name="cities"
          autoload={false}
          loadOptions={props.getCities}
          placeholder="Ingresa Ciudad/Municipio de nacimiento"
          searchPromptText="Buscar..."
          value={props.currentCity}
          disabled={!props.currentState || !props.isEditing}
          onChange={props.onSelectChange("cityId")}
          instanceId="cities"
        />
      </label>
      <label className="phone width-50" htmlFor="phone">
        <span>Teléfono de contacto*</span>
        <input
          className="generic-input"
          type="text"
          placeholder="Ingresa teléfono de contacto"
          id="phone"
          autoComplete="phone"
          name="phone"
          onChange={props.handleChange("phone")}
          value={props.phone}
          onBlur={props.onInputReady("phone")}
          disabled={!props.isEditing}
        />
      </label>
      <label className="password width-100" htmlFor="register-password">
        <span>Actual contraseña*</span>
        <input
          className="generic-input"
          type="password"
          placeholder="Actual contraseña"
          id="register-password"
          autoComplete="password"
          name="password"
          onChange={props.handleChange("currentPassword")}
          value={props.currentPassword}
          disabled={!props.isEditing}
        />
      </label>
      <label className="new-password width-100" htmlFor="new-password">
        <span>Nueva contraseña*</span>
        <input
          className="generic-input"
          type="password"
          placeholder="Nueva contraseña"
          id="new-password"
          autoComplete="new-password"
          name="passwordConfirmation"
          onChange={props.handleChange("newPassword")}
          value={props.newPassword}
          disabled={!props.isEditing}
        />
      </label>
    </FormContainer>
    {props.isEditing && (
      <ButtonContainer>
        <GenericButton action={props.onChangePassword}>
          Cambiar contraseña
        </GenericButton>
      </ButtonContainer>
    )}
  </UserFormContainer>
);

UserForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fullName: PropTypes.string.isRequired,
  birtday: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  currentPassword: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  identityDoc: PropTypes.string.isRequired,
  typeIdentityDocId: PropTypes.number.isRequired,
  currentState: PropTypes.object.isRequired,
  currentCity: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  onInputReady: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  getCities: PropTypes.func.isRequired,
  getStates: PropTypes.func.isRequired
};

export default withStore(UserForm);
