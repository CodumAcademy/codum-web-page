import styled from "styled-components";
import { prop } from "styled-tools";

export const Container = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 2px 8px 0 rgba(187, 187, 187, 0.5);
  border-radius: 32.7px;
  text-align: center;
  margin-bottom: 7rem !important;
  padding-bottom: 3rem;
  .prefix,
  .sufix {
    color: var(--text-color);
    font-size: 0.8rem;
  }
  width: ${prop("width")};
  ${prop("customStyle")};
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Title = styled.h3`
  color: var(--text-color);
  font-weight: bold;
`;

export const ImageContainer = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 2px 8px 0 rgba(187, 187, 187, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  margin: 0 auto;
  margin-top: -60px;
  margin-bottom: ${prop("marginBottom")};
  & > div {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    width: 80%;
    height: 80%;
  }
  img {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  color: var(--text-color);
  padding: 0 1rem;
  padding-top: 1rem;
  margin-bottom: -1rem;
  ${prop("customContentStyle")};
`;
