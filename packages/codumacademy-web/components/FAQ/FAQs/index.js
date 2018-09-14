import React from "react";
import PropTypes from "prop-types";

import SingleFAQ from "../SingleFAQ";
import Container from "./styles";

const FAQs = props => (
  <Container>
    {props.faqs.map(faq => (
      <SingleFAQ key={faq.id} question={faq.question} answer={faq.answer} />
    ))}
  </Container>
);

FAQs.defaultProps = {
  faqs: []
};

FAQs.propTypes = {
  faqs: PropTypes.array
};

export default FAQs;
