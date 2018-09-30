import styled from "styled-components";

export const ResultContainer = styled.div`
  color: var(--text-color);
  display: flexbox;
  min-height: 400px;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    min-height: 300px;
    margin-bottom: 0;
  }
  @media (max-width: 700px) {
    display: block;
  }
`;

export const ResultTextContainer = styled.div`
  width: 40%;
  margin: 0 3.5%;
  margin-top: 8%;
  text-align: right;
  @media (max-width: 1000px) {
    width: 50%;
    margin: 0 0.5%;
  }
  @media (max-width: 700px) {
    margin: 0 auto;
    text-align: left;
    width: 90%;
  }
`;

export const ResultText = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const ResultImageContainer = styled.div`
  position: relative;
  width: 50%;
  @media (max-width: 1000px) {
    width: 45%;
  }
  @media (max-width: 700px) {
    position: static;
    margin: 0 auto;
    width: 90%;
  }
`;

export const ResultImage = styled.img`
  &:first-child {
    position: absolute;
    left: 1rem;
    bottom: 0;
    width: 50%;
    @media (max-width: 1000px) {
      width: 60%;
    }
    @media (max-width: 800px) {
      width: 56%;
    }
    @media (max-width: 700px) {
      position: static;
      margin-top: 1rem;
      margin-right: 1%;
      width: 54%;
    }
  }
  &:last-child {
    position: absolute;
    right: 1rem;
    top: 0;
    width: 44%;
    @media (max-width: 700px) {
      position: static;
    }
  }
`;
