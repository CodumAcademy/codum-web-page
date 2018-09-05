import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import RegisterModal from "../../Shared/Modals/RegisterModal";

import {
  HeaderContentContainer,
  HeaderContentLeft,
  HeaderContentLeftTitle,
  HeaderContentLeftSummary,
  HeaderContentButton,
  HeaderContentRight,
  HeaderContentImage
} from "./styles";

const HeaderContent = props => (
  <HeaderContentContainer>
    <Fade up>
      <HeaderContentLeft>
        <HeaderContentLeftTitle>{props.title}</HeaderContentLeftTitle>
        <HeaderContentLeftSummary>{props.summary}</HeaderContentLeftSummary>
        <HeaderContentButton onClick={props.toggleRegisterModal}>
          {props.callToActionText}
        </HeaderContentButton>
      </HeaderContentLeft>
    </Fade>
    <HeaderContentRight>
      <HeaderContentImage src={props.imageUrl} alt={props.imageAlt} />
    </HeaderContentRight>
    <RegisterModal
      isVisible={props.isRegisterModalVisible}
      toggleModal={props.toggleRegisterModal}
      onSubmit={() => {}}
    />
  </HeaderContentContainer>
);

HeaderContent.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  callToActionText: PropTypes.string.isRequired,
  callToActionUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  isRegisterModalVisible: PropTypes.bool.isRequired,
  toggleRegisterModal: PropTypes.func.isRequired
};

export default HeaderContent;
