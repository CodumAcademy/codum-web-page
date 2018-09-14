import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import Separator from "../../../Separator";

import { Container, TitleContainer, ImageContainer } from "./styles";

const HeaderTypeOne = props => (
  <div>
    <Container>
      <TitleContainer>
        <Fade left>
          <div>
            <h1>{props.title}</h1>
            {props.description && <p>{props.description}</p>}
          </div>
        </Fade>
      </TitleContainer>
      <ImageContainer customImageStyle={props.customImageStyle}>
        <Fade right>
          <img src={props.imageUrl} alt={props.title} />
        </Fade>
      </ImageContainer>
    </Container>
    <Separator customStyle="margin-top: 0" />
  </div>
);

HeaderTypeOne.defaultProps = {
  description: null,
  customImageStyle: null
};

HeaderTypeOne.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  customImageStyle: PropTypes.string
};

export default HeaderTypeOne;
