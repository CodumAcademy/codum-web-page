import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import TeamBox from "../TeamBox";

import Container from "./styles";

const TeamBoxes = () => (
  <Fade up>
    <Container>
      <TeamBox key={1} name="Rappi" logoUrl="/static/images/rappi-logo.png">
        <ul>
          <li>
            Proyecto de innovación que nace en Imaginamos, en donde la pasión,
            la dedicación y la mentalidad de Startup se convirtieron en
            ingredientes clave para cambiar la forma como compramos en línea.
          </li>
          <br />
          {/* eslint-disable-line*/}

          <li>
            Es uno de los emprendimientos tecnológicos más importantes en la
            historia del continente.
          </li>
          <br />
          {/* eslint-disable-line*/}

          <li>
            Han logrado hacer los levantamientos de capital más importante en la
            industria de la tecnología en Latinoamérica.
          </li>
          <br />
          {/* eslint-disable-line*/}

          <li>
            Es una plataforma de servicios que te ayuda a conseguir lo que sea
            en cuestión de minutos, desde una comida, hasta medicamentos. ¡Rappi
            te lo lleva!
          </li>
          <br />
          {/* eslint-disable-line*/}
        </ul>
      </TeamBox>
    </Container>
  </Fade>
);

TeamBoxes.defaultProps = {
  data: []
};

TeamBoxes.propTypes = {
  data: PropTypes.array
};

export default TeamBoxes;
