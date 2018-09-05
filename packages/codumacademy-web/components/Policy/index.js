import React from "react";
import Helmet from "react-helmet";

import Footer from "../Shared/Footer";
import TopNavigation from "../Shared/TopNavigation";

import CheckLogin from "../CheckLogin";

import Iframe from "./styles";

const TeamPage = () => (
  <CheckLogin>
    <section className="policy with-green-shape">
      <Helmet>
        <title>Política de Tratamiento de Datos Personales</title>
      </Helmet>
      <TopNavigation />
      <div>
        <Iframe
          src="/static/politica-tratamiento-de-datos-personales.html"
          title="Politica tratamiento de datos personales"
        />
      </div>
      <Footer />
    </section>
  </CheckLogin>
);

export default TeamPage;
