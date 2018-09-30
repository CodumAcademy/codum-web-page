import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import GoalBox from "../GoalBox";
import Separator from "../../Shared/Separator";

import { GoalBoxesContainer, GoalBoxesTitle, Boxes } from "./styles";

const GoalBoxes = props => (
  <GoalBoxesContainer>
    <Separator margin="4rem" />
    <Fade left>
      <GoalBoxesTitle className="font-aguda">{props.title}</GoalBoxesTitle>
    </Fade>
    <Fade left cascade>
      <Boxes>
        {props.goals.map(goal => <GoalBox key={goal.id} {...goal} />)}
      </Boxes>
    </Fade>
  </GoalBoxesContainer>
);

GoalBoxes.defaultProps = {
  goals: []
};

GoalBoxes.propTypes = {
  title: PropTypes.string.isRequired,
  goals: PropTypes.array
};

export default GoalBoxes;
