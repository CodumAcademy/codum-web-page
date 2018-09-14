import styled from "styled-components";
import { prop } from "styled-tools";

export const FooterContainer = styled.footer`
  color: white;
  background: #36363d;
  position: relative;
  padding-top: 2rem;
  margin-top: ${prop("marginTop")};
  a {
    color: white;
  }
  .small-light {
    font-size: 0.85rem;
    font-weight: 100;
  }
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    & > div {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media (max-width: 768px) {
    & > div {
      width: 100%;
    }
  }
`;

export const Wave = styled.div`
  background: url(/static/images/black-shape-1.svg) no-repeat;
  background-size: 100%;
  background-position: top left;
  position: absolute;
  width: 102%;
  height: 75px;
  top: -74px;
  left: -1px;
  @media (max-width: 768px) {
    width: 102% !important;
  }
`;

export const Logo = styled.figure`
  width: 25%;
  img {
    max-width: 100%;
  }
  @media (max-width: 1000px) {
    margin-top: -2rem;
    margin-bottom: 1rem;
    text-align: center;
    width: 100%;
  }
`;

export const TopContent = styled.div`
  display: flex;
  margin: 0 auto;
  width: 95%;
  & > div {
    display: flex;
    width: 75%;
  }
  @media (max-width: 1000px) {
    & > div {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    & > div {
      flex-wrap: wrap;
      padding-left: 1rem;
    }
  }
`;

export const TopContentTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const TopContentAnchorTitle = styled.a`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const TopContentItem = styled.div`
  width: 28%;
  &:first-child {
    text-align: left;
    @media (max-width: 1000px) {
      text-align: center;
    }
  }
  &:last-child {
    text-align: center;
    width: 100px;
    img {
      max-width: 100%;
    }
  }
  @media (max-width: 1000px) {
    margin-bottom: 2rem;
    text-align: center;
    width: 50%;
    &:last-child {
      margin-bottom: 0;
      width: 50%;
    }
  }
`;

export const BottomContent = styled.div`
  margin: 0 auto;
  padding-bottom: 0.5rem;
  width: 95%;
  & > div:first-child {
    display: flex;
    a {
      font-weight: 100;
      font-size: 1.3rem;
      margin-right: 5%;
    }
  }
  & > div:last-child {
    font-size: 0.7rem;
    font-weight: 100;
    margin-top: 1rem;
    text-align: center;
    text-align: center;
    img {
      height: 1.1rem;
      vertical-align: middle;
    }
  }
  @media (max-width: 1000px) {
    & > div:first-child {
      justify-content: center;
      a {
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  @media (max-width: 768px) {
    & > div:first-child {
      flex-wrap: wrap;
      justify-content: center;
      a {
        font-size: 1rem;
        margin-bottom: 1rem;
      }
    }
  }
`;

export const MapContainer = styled.div`
  position: relative;
  padding-bottom: 75%; // This is the aspect ratio
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
`;
