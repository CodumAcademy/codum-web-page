import styled from "styled-components";

export const StatsBoxesContainer = styled.div`
  color: #6b6b6b;
  display: flex;
  justify-content: space-around;
  font-size: 0.9rem;
  flex-wrap: wrap;
`;

export const StatBox = styled.div`
  background: #fcfcfc;
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 21%;
  @media (max-width: 1200px) {
    width: 22%;
  }
  @media (max-width: 1000px) {
    width: 24%;
  }
  @media (max-width: 850px) {
    box-shadow: 0 0 1px rgba(51, 51, 51, 0.2);
    margin-bottom: 2rem;
    width: 45%;
  }
  @media (max-width: 600px) {
    margin-bottom: 1rem;
    width: 48%;
  }
  @media (max-width: 500px) {
    margin-bottom: 1rem;
    width: 90%;
  }
`;

export const StatBoxIcon = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  @media (max-width: 850px) {
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

export const StatBoxBigText = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;
