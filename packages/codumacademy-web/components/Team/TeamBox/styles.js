import styled from "styled-components";

export const Container = styled.div`
  border-radius: 30px;
  background-color: #fcfcfc;
  color: #6b6b6b;
  box-shadow: 0 2px 4px 0 rgba(131, 131, 131, 0.5);
  width: 35%;
  padding: 3.5rem;
  box-sizing: border-box;
  margin-bottom: 130px;
  img {
    max-width: 100%;
  }
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 800px) {
    width: 45%;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const LogoContainer = styled.div`
  border-radius: 30px;
  background-color: #fcfcfc;
  box-shadow: 0 2px 4px 0 rgba(161, 161, 161, 0.5);
  display: block;
  height: 130px;
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -130px;
  margin-bottom: 3rem;
  & > div {
    border-radius: 30px;
    background: white;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    width: 90%;
    height: 85%;
  }
`;
