import React from "react";
import Helmet from "react-helmet";
import dummyData from "../../dummy-data/announcements";

import Footer from "../Shared/Footer";
import TopNavigation from "../Shared/TopNavigation";
import Separator from "../Shared/Separator";
import HeaderTypeOne from "../Shared/UI/Headers/HeaderTypeOne";
import AnnouncementBoxes from "./AnnouncementBoxes";
import Testimonies from "./Testimonies";
import RegisterModal from "../Shared/Modals/RegisterModal";
import VideoModal from "../Shared/Modals/VideoModal";

import CheckLogin from "../CheckLogin";

const { cards, testimonies } = dummyData;

const headerData = {
  imageUrl: "/static/images/announcement.png",
  description:
    "Buscamos a los mejores de la industria TI, dispuestos a enfrentar grandes retos, innovar y transformar el mundo digital.",
  title: "CONVOCATORIA"
};

class AnnouncementPage extends React.Component {
  state = {
    isRegisterModalVisible: false,
    isVideoModalVisible: false,
    selectedVideo: ""
  };
  toggleRegisterModal = () => {
    this.setState({
      isRegisterModalVisible: !this.state.isRegisterModalVisible
    });
  };
  toggleVideoModal = videoUrl => {
    const newState = {
      isVideoModalVisible: !this.state.isVideoModalVisible
    };
    if (videoUrl) newState.selectedVideo = videoUrl;

    this.setState(newState);
  };
  render() {
    return (
      <CheckLogin>
        <section className="announcement with-green-shape">
          <Helmet>
            <title>Convocatoria</title>
          </Helmet>
          <TopNavigation />
          <HeaderTypeOne {...headerData} />
          <AnnouncementBoxes data={cards} />
          <Separator />
          <Testimonies
            testimonies={testimonies}
            toggleRegisterModal={this.toggleRegisterModal}
            toggleVideoModal={this.toggleVideoModal}
          />
          <RegisterModal
            isVisible={this.state.isRegisterModalVisible}
            toggleModal={this.toggleRegisterModal}
            onSubmit={() => {}}
          />
          <VideoModal
            isVisible={this.state.isVideoModalVisible}
            toggleModal={() => this.toggleVideoModal(false)}
            videoUrl={this.state.selectedVideo}
          />
          <Footer marginTop="20%" />
        </section>
      </CheckLogin>
    );
  }
}

export default AnnouncementPage;
