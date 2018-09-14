import React from "react";
import PropTypes from "prop-types";

import ProgressBarHorizontal from "../../Shared/UI/ProgressBar/Horizontal";
import ItemCheckbox from "./item-checkbox";
import QuizApp from "../../QuizApp";
import InPartLoading from "../../Shared/UI/Loaders/InPartLoading";

import withStore from "./store";

import {
  Title,
  Container,
  ProgressContainer,
  ListContainer,
  QuizAppContainer,
  CantSchedule
} from "./styles";

const Register = props => (
  <Container>
    {!props.canSchedule && (
      <CantSchedule>
        <Title>¡Gracias por participar!</Title>
        <br />
        <p>
          Aunque hoy no has pasado la prueba, no te desanimes; puedes
          presentarte nuevamente en la convocatoria que abriremos en Agosto.
        </p>
        <br />
        <p>
          Te invitamos a estar pendiente de nuestra página web y redes sociales
          para conocer las nuevas fechas.
        </p>
        <br />
        <p>
          (Facebook)&nbsp;
          <a
            href="//facebook.com/CodumAcademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codum Academy
          </a>
          <br />
          (Twitter)&nbsp;
          <a
            href="//twitter.com/CodumAcademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            @CodumAcademy
          </a>
          <br />
          (Instagram)&nbsp;
          <a
            href="//instagram.com/codumacademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            @codumacademy
          </a>
          <br />
        </p>
      </CantSchedule>
    )}
    {props.showCongratulations() &&
      props.canSchedule && (
        <div>
          <Title>¡Felicitaciones!</Title>
          <p>
            Has superado exitosamente las pruebas de esta primera fase del
            proceso. En los próximos días recibirás mas información en tu correo electrónico.
          </p>
        </div>
      )}
    {props.canSchedule &&
      !props.showCongratulations() && <Title>Tu proceso de registro</Title>}
    {props.canSchedule &&
      !props.showCongratulations() && (
        <ProgressContainer>
          <ProgressBarHorizontal
            currentValue={props.totalCompleted}
            totalValue={props.totalRequirements}
          />
        </ProgressContainer>
      )}
    {props.canSchedule &&
      !props.showCongratulations() && (
        <ListContainer>
          <ItemCheckbox
            key="1-checked"
            text="Registro completo de datos"
            checked
          />
          {props.currentConvocation.convocationRequirements.map(item => (
            <ItemCheckbox
              key={item.id}
              text={item.description}
              help={item.helpText}
              checked={props.getChecked(item)}
              action={props.itemAction(item)}
              disabled={!props.canSchedule || props.disableds[item.id]}
            />
          ))}
        </ListContainer>
      )}
    {props.currentQuiz.id && (
      <QuizAppContainer
        isLoading={props.isPartLoading}
        className="animated slideInLeft"
      >
        <QuizApp quiz={props.currentQuiz} />
      </QuizAppContainer>
    )}
    {props.isPartLoading && <InPartLoading />}
    <a
      href="https://docs.google.com/forms/d/1fKDXTQ4i01nrp65055rihv6a1Ks_mPoN01NoCAF_7X4/edit"
      target="_blank"
      rel="noopener noreferrer"
    >
      IMPORTANTE: No olvides llenar el formulario de Carecterización
      Socioeconómica AQUÍ
    </a>
  </Container>
);
Register.propTypes = {
  currentConvocation: PropTypes.object.isRequired,
  currentQuiz: PropTypes.object.isRequired,
  totalCompleted: PropTypes.number.isRequired,
  isPartLoading: PropTypes.bool.isRequired,
  showCongratulations: PropTypes.func.isRequired,
  canSchedule: PropTypes.bool.isRequired,
  disableds: PropTypes.object.isRequired,
  itemAction: PropTypes.func.isRequired,
  getChecked: PropTypes.func.isRequired,
  totalRequirements: PropTypes.number.isRequired
};

export default withStore(Register);
