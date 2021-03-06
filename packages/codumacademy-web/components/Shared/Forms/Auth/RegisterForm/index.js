/* eslint-disable */

import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { Async } from "react-select";
import reselectCss from "react-select/dist/react-select.css";

import { FormContainer, ErrorContent } from "./styles";
import GenericButton from "../../../UI/Buttons/GenericButton";

import withStore from "./store";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOtherOption: false
    };
  }
  // static getDerivedStateFromProps() {
  //   // console.log(nextProps);
  //   // if (nextProps.values !== this.props.values) {
  //   //   this.props.resetForm(nextProps);
  //   // }
  // }
  classNameProsOnErrors = key =>
    `generic-input ${
      this.props.touched[key] && this.props.errors[key] ? "error" : ""
    }`;
  errorMessageOnErrors = key =>
    this.props.touched[key] && this.props.errors[key] ? (
      <ErrorContent>{this.props.errors[key]}</ErrorContent>
    ) : null;

  onShowOtherOption = evt => {
    const option = evt.target.value;
    if (option == 14) {
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
    const {
      values,
      errors,
      touched,
      handleChange,
      handleSubmit,
      isSubmitting
    } = this.props;
    return (
      <FormContainer method="post" onSubmit={handleSubmit}>
        <Helmet>
          <style>{reselectCss}</style>
        </Helmet>
        <label className="fullname width-100" htmlFor="fullName">
          <span>Nombres y apellidos*</span>
          <input
            name="fullName"
            className={this.classNameProsOnErrors("fullName")}
            type="text"
            placeholder="Ingresa aquí tus nombres y apellidos"
            id="fullName"
            autoComplete="name"
            onChange={handleChange}
            value={values.fullName || ""}
          />
          {this.props.touched.fullName && this.props.errors.fullName ? (
            <ErrorContent>{this.props.errors.fullName}</ErrorContent>
          ) : null}
        </label>
        <label className="birtday width-50" htmlFor="birtday">
          <span>Fecha de nacimiento*</span>
          <input
            className={this.classNameProsOnErrors("birtday")}
            type="date"
            id="birtday"
            autoComplete="birtday"
            name="birtday"
            onChange={handleChange}
            value={values.birtday}
          />
          {this.errorMessageOnErrors("birtday")}
        </label>
        <div className="offset-50" />
        <label
          className="document-type width-50 margin-2-percent"
          htmlFor="id-type"
        >
          <span>Tipo de documento*</span>
          <div className="select-wrapper">
            <select
              className={this.classNameProsOnErrors("typeIdentityDocId")}
              id="id-type"
              name="typeIdentityDocId"
              onChange={handleChange}
              value={values.typeIdentityDocId}
            >
              <option value>--</option>
              <option value="1">CC</option>
              <option value="2">TI</option>
            </select>
          </div>
          {this.errorMessageOnErrors("typeIdentityDocId")}
        </label>
        <label className="document-id width-50" htmlFor="id">
          <span>Número de documento*</span>
          <input
            className={this.classNameProsOnErrors("identityDoc")}
            type="text"
            placeholder="Ingresa número de documento"
            id="id"
            autoComplete="id"
            name="identityDoc"
            onChange={handleChange}
            value={values.identityDoc}
          />
          {this.errorMessageOnErrors("identityDoc")}
        </label>
        <label className="city width-50 margin-2-percent" htmlFor="state">
          <span>Departamento de residencia*</span>
          <Async
            className={`generic-input select ${
              touched.stateId && errors.stateId ? "error" : ""
            }`}
            name="states"
            loadOptions={this.props.getStates}
            placeholder="Ingresa Departamento de residencia"
            searchPromptText="Buscar..."
            onChange={this.props.onSelectChange("stateId")}
            value={this.props.currentState}
            instanceId="states"
            cache={false}
          />
          {this.errorMessageOnErrors("stateId")}
        </label>
        <label className="town width-50" htmlFor="city">
          <span>Ciudad de residencia*</span>
          <Async
            className={`generic-input select ${
              touched.cityId && errors.cityId ? "error" : ""
            }`}
            name="cities"
            autoload={false}
            loadOptions={this.props.getCities}
            placeholder="Ingresa Ciudad/Municipio de residencia"
            searchPromptText="Buscar..."
            onChange={this.props.onSelectChange("cityId")}
            value={this.props.currentCity}
            disabled={!this.props.currentState}
            instanceId="cities"
            cache={false}
          />
          {this.errorMessageOnErrors("cityId")}
        </label>
        <label className="university width-100" htmlFor="university">
          <span>Universidad*</span>
          <input
            name="university"
            className={this.classNameProsOnErrors("university")}
            type="text"
            placeholder="Ingresa aquí tu Universidad"
            id="university"
            autoComplete="university"
            onChange={handleChange}
            value={values.university || ""}
          />
          {this.props.touched.university && this.props.errors.university ? (
            <ErrorContent>{this.props.errors.university}</ErrorContent>
          ) : null}
        </label>
        <label className="career width-100" htmlFor="career">
          <span>Programa / Carrera*</span>
          <input
            name="career"
            className={this.classNameProsOnErrors("career")}
            type="text"
            placeholder="Ingresa aquí tus Programa / Carrera"
            id="career"
            autoComplete="career"
            onChange={handleChange}
            value={values.career || ""}
          />
          {this.props.touched.career && this.props.errors.career ? (
            <ErrorContent>{this.props.errors.career}</ErrorContent>
          ) : null}
        </label>
        <label className="semester width-100" htmlFor="semester">
          <span>Último semestre finalizado*</span>
          <div className="select-wrapper">
            <select
              className={this.classNameProsOnErrors("semester")}
              id="id-semester"
              name="semester"
              onChange={e => {
                this.onShowOtherOption(e);
                return handleChange(e);
              }}
              value={values.semester}
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
          {this.errorMessageOnErrors("semester")}
        </label>
        {this.state.showOtherOption && (
          <label className="other width-100" htmlFor="other">
            <span>Describe otra opción</span>
            <input
              className={this.classNameProsOnErrors("other")}
              type="text"
              placeholder="Ingresa otra opción"
              id="other"
              autoComplete="other"
              name="other"
              onChange={handleChange}
              value={values.other}
            />
            {this.errorMessageOnErrors("other")}
          </label>
        )}
        <label className="phone width-50" htmlFor="phone">
          <span>Teléfono de contacto*</span>
          <input
            className={this.classNameProsOnErrors("phone")}
            type="text"
            placeholder="Ingresa teléfono de contacto"
            id="phone"
            autoComplete="phone"
            name="phone"
            onChange={handleChange}
            value={values.phone}
          />
          {this.errorMessageOnErrors("phone")}
        </label>
        <label className="email width-100" htmlFor="register-email">
          <span>Correo electrónico*</span>
          <input
            className={this.classNameProsOnErrors("email")}
            type="email"
            placeholder="Ingresa correo electrónico"
            id="register-email"
            autoComplete="email"
            onChange={handleChange}
            name="email"
            value={values.email}
          />
          {this.errorMessageOnErrors("email")}
        </label>
        <label className="password width-100" htmlFor="register-password">
          <span>Crear contraseña*</span>
          <input
            className={`generic-input ${
              touched.password &&
              touched.passwordConfirmation &&
              errors.password
                ? "error"
                : ""
            }`}
            type="password"
            placeholder="Crear contraseña"
            id="register-password"
            autoComplete="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
        </label>
        <label
          className="password-confirm width-100"
          htmlFor="password-confirm"
        >
          <span>Confirmar contraseña*</span>
          <input
            className={`generic-input ${
              touched.password &&
              touched.passwordConfirmation &&
              errors.password
                ? "error"
                : ""
            }`}
            type="password"
            placeholder="Confirmar contraseña"
            id="password-confirm"
            autoComplete="password-confirm"
            name="passwordConfirmation"
            onChange={handleChange}
            value={values.passwordConfirmation}
          />
          {touched.password &&
            touched.passwordConfirmation &&
            errors.password && <ErrorContent>{errors.password}</ErrorContent>}
        </label>
        <div className="how-did-you-find-us">
          <h4>¿Cómo te enteraste de Codum Academy?</h4>
          <label className="width-100" htmlFor="family-friends">
            <input
              className={this.classNameProsOnErrors("howDidYouFindUs")}
              type="radio"
              name="howDidYouFindUs"
              id="family-friends"
              onChange={handleChange}
              value="Familia y/o amigos"
            />
            <span>Familia y/o amigos</span>
          </label>
          <label className="width-100" htmlFor="social-media">
            <input
              className={this.classNameProsOnErrors("howDidYouFindUs")}
              type="radio"
              name="howDidYouFindUs"
              id="social-media"
              onChange={handleChange}
              value="Redes sociales"
            />
            <span>Redes sociales</span>
          </label>
          <label className="width-100" htmlFor="website">
            <input
              className={this.classNameProsOnErrors("howDidYouFindUs")}
              type="radio"
              name="howDidYouFindUs"
              id="website"
              onChange={handleChange}
              value="Página web"
            />
            <span>Página web</span>
          </label>
          <label className="width-100" htmlFor="university-find">
            <input
              className={this.classNameProsOnErrors("howDidYouFindUs")}
              type="radio"
              name="howDidYouFindUs"
              id="university-find"
              onChange={handleChange}
              value="Universidad"
            />
            <span>Universidad</span>
          </label>
          {values.howDidYouFindUs === "Universidad" ||
          values.howDidYouFindUs === "Página web" ? (
            <label className="width-50" htmlFor="university">
              <span>¿Cuál?</span>
              <input
                className="generic-input"
                type="text"
                id="university"
                autoComplete="university"
                name="howDidYouFindUsText"
                onChange={handleChange}
                value={values.howDidYouFindUsText}
              />
            </label>
          ) : null}
          {this.errorMessageOnErrors("howDidYouFindUsText")}
        </div>
        <label className="terms width-100" htmlFor="terms">
          <input
            className={this.classNameProsOnErrors("terms")}
            type="checkbox"
            id="terms"
            autoComplete="terms"
            name="terms"
            onChange={handleChange}
            value={values.terms}
          />
          <span>
            <a target="_blank" href="/politica-tratamiento-de-datos-personales">
              Acepto el tratamiento de mis datos personales
            </a>
          </span>
          {this.errorMessageOnErrors("terms")}
        </label>

        <GenericButton
          action={handleSubmit}
          disabled={isSubmitting}
          customStyle="
            margin: 0 auto;
            display: block;
            marginTop: 1rem;
          "
          width="42%"
        >
          UNIRSE
        </GenericButton>
      </FormContainer>
    );
  }
}

RegisterForm.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getStates: PropTypes.func.isRequired,
  getCities: PropTypes.func.isRequired,
  setCurrentCity: PropTypes.func.isRequired,
  setCurrentState: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  currentCity: PropTypes.any.isRequired,
  currentState: PropTypes.any.isRequired,
  resetForm: PropTypes.func.isRequired
};

export default withStore(RegisterForm);
