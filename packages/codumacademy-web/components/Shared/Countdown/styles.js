import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 600px) {
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
  }
`;

export const NumberSpace = styled.div`
  text-align: center;
  width: 30%;
`;

export const CardBox = styled.div`
  color: var(--text-color);
  border-radius: 8px;
  background-color: #fcfcfc;
  box-shadow: 0 2px 11px 0 rgba(165, 165, 165, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-top: 2rem;
  margin: 0 auto;
  width: 50%;
  > span {
    font-size: 5rem;
    font-weight: bold;
  }
  @media (max-width: 600px) {
    width: 70%;
    > span {
      font-size: 3rem;
    }
  }
`;

export const Label = styled.p`
  color: var(--text-color);
  font-size: 2rem;
  margin-top: 1.5rem;
  @media (max-width: 600px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;
