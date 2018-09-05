import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  CardHead,
  CardThumbnail,
  CardPlay,
  CardOverlay,
  CardTitle,
  CardDescription
} from "./styles";

const TestimonyCard = props => (
  <Container onClick={props.showVideo}>
    <CardHead>
      <CardThumbnail src={props.videoThumbnail} alt={props.title} />
      <CardPlay src="/static/images/icons/play.svg" alt="play" />
      <CardOverlay className="card-overlay" />
    </CardHead>
    <CardTitle>{props.title}</CardTitle>
    <CardDescription>{props.description}</CardDescription>
  </Container>
);

TestimonyCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  videoThumbnail: PropTypes.string.isRequired,
  showVideo: PropTypes.func.isRequired
};

export default TestimonyCard;
