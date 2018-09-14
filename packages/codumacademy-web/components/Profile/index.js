import React from "react";
import Fade from "react-reveal/Fade";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Footer from "../Shared/Footer";
import TopNavigation from "../Shared/TopNavigation";
import CardTabs from "../Shared/UI/Cards/CardTabs";

import UserForm from "./UserForm";
import Register from "./Register";

import WithAuth from "../WithAuth";

import withStore from "./store";

import ProfileContainer from "./styles";

const tabs = [
  {
    id: 1,
    label: "Tu proceso de registro",
    component: Register
  },
  {
    id: 2,
    label: "Tus datos",
    component: UserForm
  }
];

const Profile = ({ user, currentTabSelected, setCurrentTab }) => (
  <WithAuth>
    <ProfileContainer className="profile with-green-shape">
      <Helmet>
        <title>Mi Perfil</title>
      </Helmet>
      <TopNavigation />
      <Fade right cascade>
        <div className="content">
          <div className="profile-name">
            <img src="/static/images/icons/user-icon.svg" alt="user" />
            <h3 className="fullName">{user.fullName}</h3>
          </div>
          <div className="tabs-content">
            <CardTabs
              tabs={tabs}
              selectedTab={currentTabSelected}
              toggleTab={setCurrentTab}
            />
          </div>
        </div>
      </Fade>
      <Footer marginTop="20%" />
    </ProfileContainer>
  </WithAuth>
);

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
  currentTabSelected: PropTypes.number.isRequired
};

export default withStore(Profile);
