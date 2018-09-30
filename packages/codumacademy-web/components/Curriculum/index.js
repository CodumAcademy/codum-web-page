import React from "react";
import Helmet from "react-helmet";

import Footer from "../Shared/Footer";
import TopNavigation from "../Shared/TopNavigation";
import HeaderTypeOne from "../Shared/UI/Headers/HeaderTypeOne";
import CardWithImageHeader from "../Shared/UI/Cards/CardWithImageHeader";

import CheckLogin from "../CheckLogin";

import CardContainer from "./styles";

const description = `
<p>Somos un programa de educación informal que busca desarrollar en jóvenes estudiantes de carreras como ingeniería de sistemas, matemáticas, ingeniería de software y otras afines, habilidades técnicas y profesionales para:<p>
<br />
<p>Desempeñarse como arquitectos de software capaces de diseñar, crear e implementar sistemas informáticos.</p>
<br />
<p>Adaptarse y asumir los retos que presenta constantemente el mundo del desarrollo.<p>
<br />
<p>Comunicarse de manera efectiva con su equipo de trabajo.</p>
<br />
<p>Entender el stack tecnológico de las empresas fundadoras y demandas de la industria en general.</p>
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
