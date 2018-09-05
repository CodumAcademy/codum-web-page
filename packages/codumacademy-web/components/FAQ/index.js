import React from "react";
import Helmet from "react-helmet";
import dummyData from "../../dummy-data/faqs";

import Footer from "../Shared/Footer";
import TopNavigation from "../Shared/TopNavigation";
import FAQs from "./FAQs";
import FAQsHeader from "./FAQsHeader";

import CheckLogin from "../CheckLogin";

const { faqs } = dummyData;

const FAQPage = () => (
  <CheckLogin>
    <section className="faqs with-green-shape">
      <Helmet>
        <title>FAQ</title>
      </Helmet>
      <TopNavigation />
      <FAQsHeader />
      <FAQs faqs={faqs} />
      <Footer marginTop="20%" />
    </section>
  </CheckLogin>
);

export default FAQPage;
