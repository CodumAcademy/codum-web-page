import styled from "styled-components";
import { prop } from "styled-tools";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 800px) {
    width: 100%;
    h1 {
      text-align: center;
    }
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  width: 60%;
  h1 {
    font-weight: bold;
    color: #36363d;
    margin: 0.5rem auto;
    text-align: left;
    width: 60%;
  }
  p {
    text-align: left;
    margin: 0 auto;
    width: 60%;
  }
  @media (max-width: 600px) {
    width: 100%;
    p {
      width: 90%;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 40%;
  img {
    max-width: 100%;
    ${prop("customImageStyle")};
  }
`;
