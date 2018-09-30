import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { compose, withState, withHandlers } from "recompose";

import withStore from "./store";
import LoginModal from "../Modals/LoginModal";

import {
  TopNavigationContainer,
  MobileButton,
  LogoFigure,
  Logo,
  NavigationContainer,
  LoginDetail,
  SocialAnchor,
  SocialIcon,
  Nav,
  NavAnchor,
  LoginButton,
  LoginButtonImage,
  LoginButtonText,
  BgImgMobile,
  ProfileBox
} from "./styles";

const TopNavigation = props => (
  <TopNavigationContainer className="top-navigation">
    <MobileButton
      onClick={props.toggleMenu}
      isMenuVisible={props.isMenuVisible}
    />
    <LogoFigure isMenuVisible={props.isMenuVisible}>
      <Link href="/">
        <a>
          <Logo src="/static/images/logo.svg" alt="CODUMACADEMY" />
        </a>
      </Link>
    </LogoFigure>
    <NavigationContainer isVisible={props.isMenuVisible}>
      <LoginDetail>
        <SocialAnchor href="//twitter.com/CodumAcademy" target="_blank">
          <SocialIcon src="/static/images/icons/twitter.svg" alt="Twitter" />
        </SocialAnchor>
        <SocialAnchor href="//instagram.com/codumacademy" target="_blank">
          <SocialIcon
            src="/static/images/icons/instagram.svg"
            alt="Instagram"
          />
        </SocialAnchor>
        <SocialAnchor href="//facebook.com/CodumAcademy" target="_blank">
          <SocialIcon src="/static/images/icons/facebook.svg" alt="Facebook" />
        </SocialAnchor>
        {!props.user.id && (
          <LoginButton onClick={props.toggleLoginModal}>
            <LoginButtonImage
              src="/static/images/icons/user-icon.svg"
              alt="User"
            />
            <LoginButtonText>INGRESAR</LoginButtonText>
          </LoginButton>
        )}
        {props.user.id && (
          <ProfileBox>
            <a className="user-container">
              <strong>Hola, </strong>
              <span className="user">{props.user.fullName}</span>
            </a>
            <ul>
              {props.user.isAdmin && (
                <li>
                  <Link href="/users-results">
                    <a>Administrar</a>
                  </Link>
                </li>
              )}
              <li>
                <Link href="/perfil">
                  <a>Mi perfil</a>
                </Link>
              </li>
              <li>
                <button onClick={props.logout}>Salir</button>
              </li>
            </ul>
          </ProfileBox>
        )}
      </LoginDetail>
      <Nav>
        <Link href="/nosotros">
          <NavAnchor>Nosotros</NavAnchor>
        </Link>
        <Link href="/convocatoria">
          <NavAnchor>Convocatoria</NavAnchor>
        </Link>
        {/* <Link href="/lanzamiento">
          <NavAnchor>Lanzamiento</NavAnchor>
        </Link> */}
        <Link href="/apoyados-por">
          <NavAnchor>Apoyados por</NavAnchor>
        </Link>
        <Link href="/plan-de-estudios">
          <NavAnchor>Plan de estudios</NavAnchor>
        </Link>
        <BgImgMobile />
      </Nav>
    </NavigationContainer>
    {!props.user.id && (
      <LoginModal
        isVisible={props.isLoginModalVisible}
        onSubmit={() => {}}
        toggleModal={props.toggleLoginModal}
      />
    )}
  </TopNavigationContainer>
);

TopNavigation.propTypes = {
  isLoginModalVisible: PropTypes.bool.isRequired,
  isMenuVisible: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  toggleLoginModal: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const funcs = withHandlers({
  toggleLoginModal: props => () =>
    props.toggleLoginVisible(!props.isLoginModalVisible),
  toggleMenu: props => () => props.toggleMenuVisible(!props.isLoginModalVisible)
});

const enhance = compose(
  withStore,
  withState("isLoginModalVisible", "toggleLoginVisible", false),
  withState("isMenuVisible", "toggleMenuVisible", false),
  funcs
);

export default enhance(TopNavigation);
