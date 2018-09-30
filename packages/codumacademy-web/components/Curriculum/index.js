import React from "react";
import Helmet from "react-helmet";

import Footer from "../Shared/Footer";
import TopNavigation from "../Shared/TopNavigation";
import HeaderTypeOne from "../Shared/UI/Headers/HeaderTypeOne";
import CardWithImageHeader from "../Shared/UI/Cards/CardWithImageHeader";

import CheckLogin from "../CheckLogin";

import CardContainer from "./styles";

const description = `
<h3>CICLO 1</h3>
<br />
<ul>
  <li>Ruby.</li>
  <li>Git y Github.</li>
  <li>Fundamentos de bases de datos.</li>
  <li>SQL y MySQL.</li>
  <li>MongoDB y Redis.</li>
</ul>
<br />
<h4>Conocimientos que adquieren los estudiantes:</h4>
<br />
<ul>
  <li>Conceptos básicos de programación orientada a objetos (POO).</li>
  <li>Bases de datos relacionales.</li>
  <li>Bases de datos no relacionales (NoSQL).</li>
  <li>Control de versiones y flujo de trabajo en equipo usando Git.</li>
</ul>
<br />
<h4>Serán capaces de:</h4>
<br />
<ul>
  <li>Solucionar problemas usando programación orientada a objetos con Ruby.</li>
  <li>Construir y consultar bases de datos relacionales (MySQL) y no relacionales (MongoDB).</li>
  <li>Por medio de GIT, trabajar en equipo a través de ramas y pull requests.</li>
</ul>
<br />
<h3>CICLO 2</h3>
<br />
<ul>
  <li>Desarrollo web.</li>
  <li>Responsive Design.</li>
  <li>PHP con Laravel.</li>
  <li>Fundamentos de JavaScript.</li>
  <li>MEAN.</li>
  <li>React.js.</li>
</ul>
<br />
<h4>Conocimientos que adquieren los estudiantes:</h4>
<br />
<ul>
  <li>Stack MEAN (Mongo, Express, Angular, Node).</li>
  <li>Framework Laravel (PHP).</li>
  <li>Servicios REST.</li>
  <li>Desarrollo frontend.</li>
</ul>
<br />
<h4>Serán capaces de:</h4>
<br />
<ul>
  <li>Construir servicios REST usando Express (NodeJS) o Laravel (PHP).</li>
  <li>Crear sitios web usando Angular y React.js.</li>
  <li>Trabajar sobre una base de código ya existente.</li>
</ul>
<br />
<h3>CICLO 3</h3>
<br />
<ul>
  <li>Profundización en Android, iOS, Backend DevOps o Frontend.</li>
</ul>
`;

const headerData = {
  imageUrl: "/static/images/7238.png",
  title: "PLAN DE ESTUDIOS"
};

const Curriculum = () => (
  <CheckLogin>
    <section className="curriculum with-green-shape">
      <Helmet>
        <title>Plan de estudios</title>
      </Helmet>
      <TopNavigation />
      <HeaderTypeOne
        {...headerData}
        customImageStyle="
          height: 80vh;
          @media (max-width: 768px){
            height: auto;
          }
        "
      />
      <CardContainer>
        <CardWithImageHeader
          icon="/static/images/icons/profits.svg"
          content={description}
          width="80%"
          customContentStyle="
            font-size: 1.4rem;
            text-align: left;
            padding: 1rem 2.5rem;
          "
          customStyle="
            @media(max-width: 768px) {
              width: 80% !important;
            }
            @media(max-width: 600px) {
              width: 90% !important;
            }
          "
        />
      </CardContainer>
      <Footer marginTop="20%" />
    </section>
  </CheckLogin>
);

export default Curriculum;
