import styled from "styled-components";

export const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  @media (max-width: 768px) {
    margin-top: -2rem;
  }
  @media (max-width: 480px) {
    margin-top: -6rem;
  }
`;
export const HeaderContentLeft = styled.div`
  padding-left: 2rem;
  width: 90%;
  @media (max-width: 1130px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
    margin: 0;
    margin-left: 1rem;
    padding: 0;
  }
`;

export const HeaderContentLeftTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-weight: bold;
  width: 80%;
  @media (max-width: 950px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
    margin-top: 2.5rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
`;

export const HeaderContentLeftSummary = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 70%;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const HeaderContentButton = styled.button`
  background: var(--green-2);
  color: white;
  cursor: pointer;
  outline: none;
  display: block;
  font-size: 1.3rem;
  text-align: center;
  width: 40%;
  padding: 0.8rem;
  border-radius: 2rem;
  transition: all ease-in-out 0.3s;
  &:hover {
    background: var(--green-1);
  }
`;

export const HeaderContentRight = styled.div`
  position: relative;
  text-align: center;
  min-height: 450px;
  width: 50%;
  @media (max-width: 1130px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    width: 24%;
  }
`;

export const HeaderContentImage = styled.img`
  position: absolute;
  left: 10%;
  bottom: 0;
  width: 80%;
  @media (max-width: 1130px) {
    left: 0;
    width: 100%;
  }
  @media (max-width: 768px) {
    left: -40%;
    width: 180%;
  }
  @media (max-width: 600px) {
    left: -150%;
    width: 350%;
  }
  @media (max-width: 480px) {
    left: -320%;
    width: 550%;
  }
`;
