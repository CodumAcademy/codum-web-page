import styled from "styled-components";

export const ObjectiveContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const ObjectiveImageContainer = styled.div`
  width: 60%;
  text-align: right;
  @media (max-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    margin: 0 auto;
    margin-top: 1rem;
    width: 60%;
  }
`;

export const ObjectiveImage = styled.img`
  margin-right: 15%;
  width: 40%;
  @media (max-width: 1000px) {
    width: 60%;
  }
  @media (max-width: 680px) {
    width: 80%;
  }
`;

export const ObjectiveTextContainer = styled.div`
  color: var(--text-color);
  margin-top: 5%;
  width: 40%;
  @media (max-width: 700px) {
    width: 55%;
  }
  @media (max-width: 600px) {
    margin: 0 auto;
    width: 90%;
  }
`;

export const ObjectiveTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const ObjectiveDescription = styled.p`
  font-size: 1.1rem;
  width: 70%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
