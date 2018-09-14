import styled from "styled-components";

export const GoalBoxContainer = styled.div`
  margin: 0 5%;
  text-align: center;
  width: 20%;
  @media (max-width: 1000px) {
    margin: 0 2%;
    width: 24%;
  }
  @media (max-width: 850px) {
    margin: 0;
    width: 25%;
  }
  @media (max-width: 800px) {
    margin-bottom: 3rem;
    width: 48%;
  }
  @media (max-width: 620px) {
    margin: 0 auto;
    margin-bottom: 4rem;
    width: 90%;
  }
`;

export const GoalBoxImage = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 4rem;
  @media (max-width: 800px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 620px) {
    margin-bottom: 1rem;
  }
`;
