import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

export const TopNavigationContainer = styled.div`
  display: flex;
  margin: 0;
  position: relative;
`;

export const MobileButton = styled.button`
  background-color: transparent;
  background-image: url(/static/images/menu.png);
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center center;
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 0.7rem;
  top: 1rem;
  padding: 0.4rem;
  height: 40px;
  width: 40px;
  border-radius: 30%;
  user-select: none;
  display: none;
  z-index: 9;
  &:active,
  &:hover {
    background-color: #42cfbd;
  }
  ${ifProp(
    "isMenuVisible",
    css`
      background-image: url(/static/images/close.png);
      position: fixed;
    `
  )};
  @media (max-width: 768px) {
    display: block;
  }
`;

export const LogoFigure = styled.figure`
  margin: 2rem;
  transition: all ease 0.6s;
  left: 0;
  top: 0;
  &:hover {
    opacity: 0.6;
  }
  img {
    width: 90%;
  }
  @media (max-width: 1000px) {
    margin: 1rem;
    img {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    max-width: 50%;
    ${ifProp(
      "isMenuVisible",
      css`
        position: fixed;
        background: white;
        padding: 6px 3px 0;
        top: 1rem;
        left: 50%;
        margin-left: -15%;
        z-index: 10;
        width: 60%;
        text-align: center;
      `
    )};
  }
  @media (max-width: 600px) {
    margin-top: 1.5rem;
    max-width: 38%;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
`;

export const NavigationContainer = styled.div`
  margin-left: 2rem;
  width: 70%;
  ${ifProp(
    "isVisible",
    css`
      right: 0 !important;
    `
  )};
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -100%;
    background: var(--green-3);
    margin: 0;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    transition: all ease 0.6s;
    z-index: 8;
    display: block;
    padding-top: 8rem;
  }
`;

export const LoginDetail = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1.3rem 0 0.6rem 0;
  @media (max-width: 768px) {
    justify-content: center;
    position: relative;
    z-index: 2;
  }
`;

export const SocialAnchor = styled.a`
  margin: 0 0.7rem;
  &:hover {
    opacity: 0.7;
  }
`;

export const SocialIcon = styled.img`
  margin-top: 0.2rem;
  height: 26px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    text-align: center;
    margin-top: 0.3rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavAnchor = styled.a`
  color: white;
  box-sizing: border-box;
  padding: 0.3rem 1rem;
  border-radius: 0.6rem;
  transition: all ease 0.6s;
  position: relative;
  margin: 0 0.4rem;
  font-size: 1.1rem;
  z-index: 2;
  &:hover {
    background: #42cfbd;
  }
  @media (max-width: 1200px) {
    margin: 0 0.3rem;
    padding: 0.4rem;
  }
  @media (max-width: 1000px) {
    margin: 0;
    font-size: 1rem;
    padding: 0.3rem;
    margin-bottom: 0.4rem;
    width: 25%;
  }
  &:nth-child(5),
  &:last-child {
    @media (max-width: 1000px) {
      width: 33%;
    }
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 2rem;
    width: 60% !important;
    margin: 0 auto;
    display: block;
    border-bottom: thin solid white;
  }
`;

export const LoginButton = styled.button`
  background: #fff;
  color: var(--green-2);
  padding: 0 1rem;
  padding-top: 0.3rem;
  height: 33px;
  border-radius: 1rem;
  font-size: 0.9rem;
  margin: 0 1rem;
  cursor: pointer;
  transition: all ease 0.5s;
  outline: none;
  &:hover {
    opacity: 0.9;
  }
`;
export const LoginButtonImage = styled.img`
  width: 18px;
  margin-top: -3px;
  margin-right: 3px;
`;

export const LoginButtonText = styled.span`
  vertical-align: top;
`;

export const BgImgMobile = styled.div`
  background: url(/static/images/code-man.png) no-repeat;
  background-position: bottom right;
  background-size: 60%;
  position: absolute;
  z-index: 1;
  height: 100vh;
  right: 0;
  opacity: 0.4;
  width: 100%;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  a,
  button {
    background: transparent;
    color: var(--text-color);
    font-weight: normal;
  }
  a.user-container {
    color: white;
    &.user {
      font-weight: 100;
      text-overflow: ellipsis;
      max-width: 100px;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
      vertical-align: middle;
    }
  }
  ul {
    display: none;
    background: white;
    list-style: none;
    text-align: center;
    border: thin solid rgba(109, 109, 109, 0.5);
    max-width: 130px;
    position: absolute;
    top: 95%;
    width: 100%;
    a,
    button {
      cursor: pointer;
      display: block;
      width: 100%;
      padding: 0.2rem 0;
      &:hover {
        background: var(--green-2);
        color: white;
      }
    }
  }
  &:hover {
    ul {
      display: block;
    }
  }
`;
