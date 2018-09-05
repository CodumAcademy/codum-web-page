import React from "react";
import Helmet from "react-helmet";
import dummyData from "../../dummy-data/about-us";

import Footer from "../Shared/Footer";
import TopNavigation from "../Shared/TopNavigation";
import HeaderTypeOne from "../Shared/UI/Headers/HeaderTypeOne";
import AboutUsBoxes from "./AboutUsBoxes";
import CheckLogin from "../CheckLogin";

const headerData = {
  imageUrl: "/static/images/about.png",
  title: "NOSOTROS"
};

const { boxes, description } = dummyData;

const AboutUs = () => (
  <CheckLogin>
    <section className="faqs with-green-shape">
      <Helmet>
        <title>Nosotros</title>
      </Helmet>
      <TopNavigation />
      <HeaderTypeOne {...headerData} description={description} />
      <AboutUsBoxes data={boxes} />
      <Footer marginTop="20%" />
    </section>
  </CheckLogin>
);

export default AboutUs;
