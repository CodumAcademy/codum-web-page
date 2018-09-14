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
          <li>Proyecto de innovación que nace en Imaginamos, en donde la pasión, la dedicación y la mentalidad de Startup se convirtieron en ingredientes clave para cambiar la forma como compramos en línea.</li><br />{/* eslint-disable-line*/}

          <li>Es uno de los emprendimientos tecnológicos más importantes en la historia del continente.</li><br />{/* eslint-disable-line*/}

          <li>Han logrado hacer los levantamientos de capital más importante en la industria de la tecnología en Latinoamérica.</li><br />{/* eslint-disable-line*/}

          <li>Es una plataforma de servicios que te ayuda a conseguir lo que sea en cuestión de minutos, desde una comida, hasta medicamentos. ¡Rappi te lo lleva!</li><br />{/* eslint-disable-line*/}
        </ul>
      </TeamBox>
      <TeamBox
        key={2}
        name="Imaginamos"
        logoUrl="/static/images/imaginamos-2.png"
      >
        <ul>
          <li>Compañía dedicada a crear y acompañar nuevos negocios digitales y a ofrecer soluciones a las empresas.</li><br />{/* eslint-disable-line */}
          <li>Inició en 2007 y hoy cuenta con un equipo de 90 profesionales, 32 de ellos desarrolladores.</li><br />{/* eslint-disable-line */}
          <li>Crean alianzas con empresas del sector privado para liderar las oportunidades de mayor generación de valor, enfrentar los más complejos retos y transformar a las compañías con las que trabajan.</li>{/* eslint-disable-line */}
          <li>Hoy en día cuenta con más de 100 proyectos activos con importantes clientes de diferentes sectores como farmacéutico, bancario y de las telecomunicaciones.</li>{/* eslint-disable-line */}
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
