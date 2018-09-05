import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import CardWithImageHeader from "../../Shared/UI/Cards/CardWithImageHeader";

import { AboutUsBoxesContainer, AboutUsBoxesContent } from "./styles";

const AboutUsBoxes = props => (
  <AboutUsBoxesContainer>
    <Fade up>
      <AboutUsBoxesContent>
        {props.data.map(item => (
          <CardWithImageHeader key={item.id} {...item} />
        ))}
      </AboutUsBoxesContent>
    </Fade>
  </AboutUsBoxesContainer>
);

AboutUsBoxes.defaultProps = {
  data: []
};

AboutUsBoxes.propTypes = {
  data: PropTypes.array
};

export default AboutUsBoxes;
