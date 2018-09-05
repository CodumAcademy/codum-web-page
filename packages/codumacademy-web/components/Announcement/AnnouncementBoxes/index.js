import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import CardWithImageHeader from "../../Shared/UI/Cards/CardWithImageHeader";

import { Container, Content } from "./styles";

const AnnouncementBoxes = props => (
  <Container>
    <Fade up>
      <Content>
        {props.data.map(item => (
          <CardWithImageHeader
            key={item.id}
            width="28%"
            {...item}
            customStyle="
              margin: 0 2%;
              min-height: 270px
            "
          />
        ))}
      </Content>
    </Fade>
  </Container>
);

AnnouncementBoxes.defaultProps = {
  data: []
};

AnnouncementBoxes.propTypes = {
  data: PropTypes.array
};

export default AnnouncementBoxes;
