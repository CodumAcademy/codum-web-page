import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import TopNavigation from "../Shared/TopNavigation";
import Footer from "../Shared/Footer";

import QuizResume from "./QuizResume";

import WithAuth from "../WithAuth";
import withStore from "./store";

import {
  Container,
  Title,
  RequirementsContainer,
  QuickResume,
  ItemContent,
  UserData
} from "./styles";

const ResultsDetails = ({
  selectedUser,
  summaries,
  calcPercent,
  itemSelected,
  answers,
  setItemSelected,
  formatDate
}) => (
  <WithAuth admin>
    <section className="launch with-green-shape">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-table@latest/react-table.css"
        />
        <title>{selectedUser.fullName}</title>
      </Helmet>
      <TopNavigation />
      <Container>
        <Title>{selectedUser.fullName}</Title>
        {selectedUser &&
          selectedUser.id && (
            <UserData>
              <div>
                <h4>Email</h4>
                <p>{selectedUser.email}</p>
              </div>
              <div>
                <h4>Teléfono</h4>
                <p>{selectedUser.phone}</p>
              </div>
              <div>
                <h4>Identificación</h4>
                <p>{selectedUser.identityDoc}</p>
              </div>
              <div>
                <h4>Fecha de nacimiento</h4>
                <p>{formatDate(selectedUser.birtday)}</p>
              </div>
              <div>
                <h4>Pais</h4>
                <p>{selectedUser.country.name}</p>
              </div>
              <div>
                <h4>Departamento</h4>
                <p>{selectedUser.state.name}</p>
              </div>
              <div>
                <h4>Ciudad</h4>
                <p>{selectedUser.city.name}</p>
              </div>
              <div>
                <h4>¿Cómo se enteró?</h4>
                <p>{selectedUser.howDidYouFindUs}</p>
                <p>{selectedUser.howDidYouFindUsText}</p>
              </div>
              <div>
                <h4>Universidad</h4>
                <p>{selectedUser.university}</p>
              </div>
              <div>
                <h4>Carrera</h4>
                <p>{selectedUser.career}</p>
              </div>
              <div>
                <h4>Ultimo semestre cursado</h4>
                <p>
                  {selectedUser.semester === "11" && "Estoy en primer semestre"}
                  {selectedUser.semester === "12" && "Soy graduado de pregrado"}
                  {selectedUser.semester === "13" &&
                    "Estoy estudiando posgrado"}
                  {selectedUser.semester === "14" && "Otro"}
                  {selectedUser.semester < 11 && selectedUser.semester}
                </p>
              </div>
              <div>
                <h4>Otra opción semestres cursados</h4>
                <p>{selectedUser.other}</p>
              </div>
            </UserData>
          )}
        {selectedUser.userConvocationRequirements && (
          <RequirementsContainer>
            {selectedUser.userConvocationRequirements.map(requirement => (
              <li key={requirement.id}>
                <h3>
                  <button
                    onClick={() =>
                      setItemSelected(
                        itemSelected === requirement.id ? 0 : requirement.id
                      )
                    }
                  >
                    {requirement.convocationRequirement.description}
                    <img
                      className={`arrow ${
                        itemSelected === requirement.id ? "actived" : ""
                      }`}
                      src="/static/images/icons/down-arrow.svg"
                      alt=">"
                    />
                  </button>
                </h3>
                {itemSelected === requirement.id && (
                  <ItemContent>
                    {requirement.convocationRequirement.requiredApprove && (
                      <QuickResume>
                        <div className="icon">
                          {calcPercent(
                            summaries[requirement.convocationRequirement.quizId]
                              .successAnswers,
                            summaries[requirement.convocationRequirement.quizId]
                              .totalAnswers
                          ) >= 80 ? (
                            <img
                              src="/static/images/icons/checked.svg"
                              alt=""
                            />
                          ) : (
                            <img
                              src="/static/images/icons/close-button.svg"
                              alt=""
                            />
                          )}
                        </div>
                        <div className="item success">
                          <h5>Respuestas Correctas</h5>
                          <p>
                            {
                              summaries[
                                requirement.convocationRequirement.quizId
                              ].successAnswers
                            }
                            (
                            {calcPercent(
                              summaries[
                                requirement.convocationRequirement.quizId
                              ].successAnswers,
                              summaries[
                                requirement.convocationRequirement.quizId
                              ].totalAnswers
                            )}
                            %)
                          </p>
                        </div>
                        <div className="item failed">
                          <h5>Respuestas Incorrectas</h5>
                          <p>
                            {
                              summaries[
                                requirement.convocationRequirement.quizId
                              ].failedAnswers
                            }
                            (
                            {calcPercent(
                              summaries[
                                requirement.convocationRequirement.quizId
                              ].failedAnswers,
                              summaries[
                                requirement.convocationRequirement.quizId
                              ].totalAnswers
                            )}
                            %)
                          </p>
                        </div>
                        <div className="item resume">
                          <h5>Total</h5>
                          <p>
                            {
                              summaries[
                                requirement.convocationRequirement.quizId
                              ].successAnswers
                            }
                            /
                            {
                              summaries[
                                requirement.convocationRequirement.quizId
                              ].totalAnswers
                            }
                          </p>
                        </div>
                      </QuickResume>
                    )}
                    <QuizResume
                      key={`resume-${requirement.id}`}
                      answers={
                        answers[requirement.convocationRequirement.quizId]
                      }
                    />
                  </ItemContent>
                )}
              </li>
            ))}
          </RequirementsContainer>
        )}
        {selectedUser.id &&
          !selectedUser.userConvocationRequirements.length && (
            <div>
              <h4>No hay pruebas registradas</h4>
            </div>
          )}
      </Container>
      <Footer marginTop="20%" />
    </section>
  </WithAuth>
);

ResultsDetails.propTypes = {
  selectedUser: PropTypes.object.isRequired,
  itemSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  calcPercent: PropTypes.func.isRequired,
  setItemSelected: PropTypes.func.isRequired,
  formatDate: PropTypes.func.isRequired,
  summaries: PropTypes.object.isRequired,
  answers: PropTypes.object.isRequired
};

export default withStore(ResultsDetails);
