import React from "react";
import PropTypes from "prop-types";

import { Container, Label, ProgressBar, Progress } from "./styles";

const ProgressBarHorizontal = ({ withLabel, currentValue, totalValue }) => (
  <Container>
    {withLabel && (
      <Label>{parseInt(currentValue * 100 / totalValue, 10)}%</Label>
    )}
    <ProgressBar>
      <Progress progress={currentValue * 100 / totalValue} />
    </ProgressBar>
  </Container>
);

ProgressBarHorizontal.defaultProps = {
  withLabel: true
};

ProgressBarHorizontal.propTypes = {
  withLabel: PropTypes.bool,
  currentValue: PropTypes.number.isRequired,
  totalValue: PropTypes.number.isRequired
};

export default ProgressBarHorizontal;
