import React from "react";
import PropTypes from "prop-types";

import TestimonyCard from "../TestimonyCard";
import GenericButton from "../../Shared/UI/Buttons/GenericButton";

import { H3, Content, ButtonContainer } from "./styles";

const Testimonies = props => (
  <div>
    <H3>Testimonios</H3>
    <Content>
      {props.testimonies.map(item => (
        <TestimonyCard
          key={item.id}
          {...item}
          showVideo={() => props.toggleVideoModal(item.videoUrl)}
        />
      ))}
    </Content>
    <ButtonContainer>
      <GenericButton action={props.toggleRegisterModal} width="100%">
        ÚNETE
      </GenericButton>
    </ButtonContainer>
  </div>
);

Testimonies.defaultProps = {
  testimonies: []
};

Testimonies.propTypes = {
  testimonies: PropTypes.array,
  toggleRegisterModal: PropTypes.func.isRequired,
  toggleVideoModal: PropTypes.func.isRequired
};

export default Testimonies;
