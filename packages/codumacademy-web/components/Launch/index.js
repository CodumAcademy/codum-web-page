import React from "react";
import Helmet from "react-helmet";

import Footer from "../Shared/Footer";
import TopNavigation from "../Shared/TopNavigation";
import HeaderTypeOne from "../Shared/UI/Headers/HeaderTypeOne";

import Countdown from "../Shared/Countdown";
import CheckLogin from "../CheckLogin";

const headerData = {
  imageUrl: "/static/images/launch.png",
  title: "LANZAMIENTO"
};

const Launch = () => (
  <CheckLogin>
    <section className="launch with-green-shape">
      <Helmet>
        <title>Lanzamiento</title>
      </Helmet>
      <TopNavigation />
      <HeaderTypeOne {...headerData} />
      <Countdown deadline="Jul 23 2018 00:00:00" />
      <Footer marginTop="20%" />
    </section>
  </CheckLogin>
);

export default Launch;
