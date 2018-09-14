import React from "react";
import PropTypes from "prop-types";
import { withState, lifecycle, compose } from "recompose";

import getRemainingTime from "../../../utils/get-remaining-time";

import { Container, CardBox, NumberSpace, Label } from "./styles";

const Countdown = ({ days, hours, minutes }) => (
  <Container>
    <NumberSpace>
      <CardBox>
        <span>{days}</span>
      </CardBox>
      <Label>Días</Label>
    </NumberSpace>
    <NumberSpace>
      <CardBox>
        <span>{hours}</span>
      </CardBox>
      <Label>Horas</Label>
    </NumberSpace>
    <NumberSpace>
      <CardBox>
        <span>{minutes}</span>
      </CardBox>
      <Label>Minutos</Label>
    </NumberSpace>
  </Container>
);

const lifecycles = lifecycle({
  componentDidMount() {
    this.timerUpdate = setInterval(() => {
      const t = getRemainingTime(this.props.deadline);
      this.props.setDays(t.remainDays);
      this.props.setHours(t.remainHours);
      this.props.setMinutes(t.remainMinutes);
      if (t.remainTime <= 1) clearInterval(this.timerUpdate);
    }, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.timerUpdate);
  }
});

const enhanced = compose(
  withState("days", "setDays", "0"),
  withState("hours", "setHours", "0"),
  withState("minutes", "setMinutes", "0"),
  lifecycles
);

Countdown.propTypes = {
  deadline: PropTypes.string.isRequired,
  days: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  hours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  minutes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default enhanced(Countdown);
