import React from "react";
import Helmet from "react-helmet";

import Footer from "../Shared/Footer";
import TopNavigation from "../Shared/TopNavigation";
import CardWithImageHeader from "../Shared/UI/Cards/CardWithImageHeader";

import CheckLogin from "../CheckLogin";

import Container from "./styles";

const Building = () => (
  <CheckLogin>
    <section className="building with-green-shape">
      <Helmet>
        <title>En construcción</title>
      </Helmet>
      <TopNavigation />
      <Container>
        <CardWithImageHeader
          title="Sección en construcción"
          icon="/static/images/icons/sketch.svg"
          content="Para encontrar más información, te invitamos a seguir navegando en nuestras otras secciones"
        />
      </Container>
      <Footer marginTop="20%" />
    </section>
  </CheckLogin>
);

export default Building;
