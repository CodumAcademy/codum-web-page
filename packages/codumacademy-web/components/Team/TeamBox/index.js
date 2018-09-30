import React from "react";
import PropTypes from "prop-types";

import { Container, LogoContainer } from "./styles";

const TeamBox = props => (
  <Container>
    <LogoContainer>
      <div>
        <img src={props.logoUrl} alt={props.name} />
      </div>
    </LogoContainer>
    <div>{props.children}</div>
  </Container>
);

TeamBox.propTypes = {
  name: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

export default TeamBox;
