import React from "react";
import PropTypes from "prop-types";

import SimpleModal from "../../UI/SimpleModal";

import { VideoWrapper, Iframe } from "./styles";

const VideoModal = props => (
  <SimpleModal isVisible={props.isVisible} toggleModal={props.toggleModal}>
    <VideoWrapper>
      <Iframe
        width="560"
        height="315"
        src={props.videoUrl || ""}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="youtube"
      />
    </VideoWrapper>
  </SimpleModal>
);

VideoModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  videoUrl: PropTypes.string.isRequired
};

export default VideoModal;
