import React from "react";
import PropTypes from "prop-types";

import { Container, ToggleButton, Answer } from "./styles";

class SingleFAQ extends React.Component {
  state = {
    isActived: false
  };

  toggleVisibility = () => {
    this.setState({ isActived: !this.state.isActived });
  };

  render() {
    return (
      <Container isActived={this.state.isActived}>
        <h3>
          <ToggleButton
            onClick={this.toggleVisibility}
            isActived={this.state.isActived}
          >
            {this.props.question}
          </ToggleButton>
        </h3>
        <Answer
          isActived={this.state.isActived}
          dangerouslySetInnerHTML={{ __html: this.props.answer }}
        />
      </Container>
    );
  }
}

SingleFAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default SingleFAQ;
