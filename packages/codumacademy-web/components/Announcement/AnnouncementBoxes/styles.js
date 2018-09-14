import styled from "styled-components";

export const Container = styled.div`
  margin-top: 8rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
