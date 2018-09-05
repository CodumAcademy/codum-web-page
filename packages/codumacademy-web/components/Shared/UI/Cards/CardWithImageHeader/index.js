import React from "react";
import PropTypes from "prop-types";

import { Container, ImageContainer, Title, Content } from "./styles";

const CardWithImageHeader = props => (
  <Container width={props.width} customStyle={props.customStyle}>
    <ImageContainer marginBottom={!props.prefix ? "2rem" : "1rem"}>
      <div>
        <img src={props.icon} alt={props.title} />
      </div>
    </ImageContainer>
    {props.prefix && <span className="prefix">{props.prefix}</span>}
    {props.title && <Title>{props.title}</Title>}
    {props.sufix && <span className="sufix">{props.sufix}</span>}
    {props.content && (
      <Content
        customContentStyle={props.customContentStyle}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    )}
  </Container>
);

CardWithImageHeader.defaultProps = {
  prefix: null,
  sufix: null,
  title: null,
  content: null,
  customStyle: "",
  customContentStyle: "",
  width: "20%"
};

CardWithImageHeader.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  prefix: PropTypes.string,
  sufix: PropTypes.string,
  width: PropTypes.string,
  customStyle: PropTypes.string,
  customContentStyle: PropTypes.string,
  content: PropTypes.string
};

export default CardWithImageHeader;
