import React from "react";
import Helmet from "react-helmet";

import Footer from "../Shared/Footer";
import TopNavigation from "../Shared/TopNavigation";
import TeamBoxes from "./TeamBoxes";

import CheckLogin from "../CheckLogin";

import H1 from "./styles";

const TeamPage = () => (
  <CheckLogin>
    <section className="team with-green-shape">
      <Helmet>
        <title>Equipo</title>
      </Helmet>
      <TopNavigation />
      <div>
        <H1>Equipo</H1>
        <TeamBoxes data={[]} />
      </div>
      <Footer />
    </section>
  </CheckLogin>
);

export default TeamPage;
