import React from "react";
import Reveal from "react-reveal/Reveal";

import Separator from "../../Shared/Separator";

import Content from "./styles";

const FAQsHeader = () => (
  <div>
    <Content>
      <h1>PREGUNTAS FRECUENTES</h1>
      <Reveal effect="fadeInRight">
        <div>
          <img src="/static/images/faq-man.png" alt="faqs" />
        </div>
      </Reveal>
    </Content>
    <Separator customStyle="margin-Top: -5px" />
  </div>
);

export default FAQsHeader;
