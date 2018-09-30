import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const H3 = styled.h3`
  font-size: 2.3rem;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 5rem;
  font-size: 1.2rem;
  width: 20%;
  @media (max-width: 950px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    margin-top: 3rem;
    margin-bottom: 10rem;
    width: 60%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;
