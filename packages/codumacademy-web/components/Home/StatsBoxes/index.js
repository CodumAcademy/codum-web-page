import React from "react";
import Fade from "react-reveal/Fade";

import {
  StatsBoxesContainer,
  StatBox,
  StatBoxIcon,
  StatBoxBigText
} from "./styles";

// import StatsBox from "./StatsBox";

const StatsBoxes = () => (
  <Fade bottom cascade>
    <StatsBoxesContainer className="stats-boxes">
      <StatBox>
        <StatBoxIcon src="/static/images/icons/worldwide.svg" alt="" />
        <div>
          <StatBoxBigText>90.000 estudiantes</StatBoxBigText>
          <p>dentro del déficit de profesionales en carreras TI que se proyectan para el 2019</p>{/* eslint-disable-line */}
        </div>
      </StatBox>
      <StatBox>
        <StatBoxIcon src="/static/images/icons/startup-1.svg" alt="" />
        <div>
          <StatBoxBigText>58.000</StatBoxBigText>
          <p>nuevos estudiantes cursan carreras relacionadas con TI,de los cuales solo 6 mil estudiantes se graduarán cada año</p>{/* eslint-disable-line */}
        </div>
      </StatBox>
      <StatBox>
        <StatBoxIcon src="/static/images/icons/quality.svg" alt="" />
        <div>
          <StatBoxBigText>47%</StatBoxBigText>
          <p>de las empresas prevé ampliar sus equipos de trabajo contratando expertos del sector TIC.</p>{/* eslint-disable-line */}
        </div>
      </StatBox>
      <StatBox>
        <StatBoxIcon src="/static/images/icons/presentation-1.svg" alt="" />
        <div>
          <StatBoxBigText>54%</StatBoxBigText>
          <p>de los profesionales de esa área trabaja en Startups</p>
        </div>
      </StatBox>
    </StatsBoxesContainer>
  </Fade>
);

export default StatsBoxes;
