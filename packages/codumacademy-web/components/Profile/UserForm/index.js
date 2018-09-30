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

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOtherOption: false
    };
  }

  onShowOtherOption = evt => {
    const option = evt.target.value;
    if (option == 14) {
      console.log(option);
      this.setState({
        showOtherOption: true
      });
    } else {
      this.setState({
        showOtherOption: false
      });
    }
  };

  render() {
    return (
      <UserFormContainer>
        {this.props.isLoading && (
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
              onChange={this.props.handleChange("fullName")}
              value={this.props.fullName}
              onBlur={this.props.onInputReady("fullName")}
              disabled={!this.props.isEditing}
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
              onChange={this.props.handleChange("birtday")}
              value={this.props.birtday}
              disabled={!this.props.isEditing}
            />
          </label>
          <div className="offset-50" />
          <label
            className="document-type width-50 margin-2-percent"
            htmlFor="id-type"
          >
            <span>Tipo de documento*</span>
            <div
              className={`select-wrapper ${
                !this.props.isEditing ? "disabled" : ""
              }`}
            >
              <select
                className="generic-input"
                id="id-type"
                name="typeIdentityDocId"
                onChange={this.props.handleChange("typeIdentityDocId")}
                value={this.props.typeIdentityDocId}
                disabled={!this.props.isEditing}
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
              onChange={this.props.handleChange("identityDoc")}
              value={this.props.identityDoc}
              onBlur={this.props.onInputReady("identityDoc")}
              disabled={!this.props.isEditing}
            />
          </label>
          <label className="city width-50 margin-2-percent" htmlFor="state">
            <span>Departamento de residencia*</span>
            <Async
              className={`generic-input select ${
                !this.props.isEditing ? "disabled" : ""
              }`}
              name="states"
              loadOptions={this.props.getStates}
              placeholder="Ingresa Departamento de residencia"
              searchPromptText="Buscar..."
              onChange={this.props.onSelectChange("stateId")}
              value={this.props.currentState}
              instanceId="states"
              disabled={!this.props.isEditing}
            />
          </label>
          <label className="town width-50" htmlFor="city">
            <span>Ciudad de residencia*</span>
            <Async
              className={`generic-input select ${
                !this.props.isEditing ? "disabled" : ""
              }`}
              name="cities"
              autoload={false}
              loadOptions={this.props.getCities}
              placeholder="Ingresa Ciudad/Municipio de residencia"
              searchPromptText="Buscar..."
              value={this.props.currentCity}
              disabled={!this.props.currentState || !this.props.isEditing}
              onChange={this.props.onSelectChange("cityId")}
              instanceId="cities"
            />
          </label>
          <label className="university width-100" htmlFor="university">
            <span>Universidad*</span>
            <input
              name="university"
              className={`generic-input select ${
                !this.props.isEditing ? "disabled" : ""
              }`}
              type="text"
              placeholder="Ingresa aquí tu Universidad"
              id="university"
              autoComplete="university"
              onChange={this.props.onSelectChange("university")}
              value={this.props.university || ""}
            />
          </label>
          <label className="career width-100" htmlFor="career">
            <span>Programa / Carrera*</span>
            <input
              name="career"
              className={`generic-input select ${
                !this.props.isEditing ? "disabled" : ""
              }`}
              type="text"
              placeholder="Ingresa aquí tus Programa / Carrera"
              id="career"
              autoComplete="career"
              onChange={this.props.onSelectChange("career")}
              value={this.props.career || ""}
            />
          </label>
          <label className="last-semester width-100" htmlFor="id-type">
            <span>Último semestre finalizado*</span>
            <div className="select-wrapper">
              <select
                className={`generic-input select ${
                  !this.props.isEditing ? "disabled" : ""
                }`}
                id="id-type"
                name="lastSemester"
                onChange={this.onShowOtherOption}
                value={this.props.lastSemester}
              >
                <option value>--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">Estoy en primer semestre</option>
                <option value="12">Soy graduado de pregrado</option>
                <option value="13">Estoy estudiando posgrado</option>
                <option value="14">Otro</option>
              </select>
            </div>
          </label>
          {this.state.showOtherOption && (
            <label className="other width-100" htmlFor="other">
              <span>Describe otra opción</span>
              <input
                className={`generic-input select ${
                  !this.props.isEditing ? "disabled" : ""
                }`}
                type="text"
                placeholder="Ingresa otra opción"
                id="other"
                autoComplete="other"
                name="other"
                onChange={this.props.handleChange("other")}
                value={this.props.other}
              />
            </label>
          )}
          <label className="phone width-50" htmlFor="phone">
            <span>Teléfono de contacto*</span>
            <input
              className="generic-input"
              type="text"
              placeholder="Ingresa teléfono de contacto"
              id="phone"
              autoComplete="phone"
              name="phone"
              onChange={this.props.handleChange("phone")}
              value={this.props.phone}
              onBlur={this.props.onInputReady("phone")}
              disabled={!this.props.isEditing}
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
              onChange={this.props.handleChange("currentPassword")}
              value={this.props.currentPassword}
              disabled={!this.props.isEditing}
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
              onChange={this.props.handleChange("newPassword")}
              value={this.props.newPassword}
              disabled={!this.props.isEditing}
            />
          </label>
        </FormContainer>
        {this.props.isEditing && (
          <ButtonContainer>
            <GenericButton action={this.props.onChangePassword}>
              Cambiar contraseña
            </GenericButton>
          </ButtonContainer>
        )}
      </UserFormContainer>
    );
  }
}

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
