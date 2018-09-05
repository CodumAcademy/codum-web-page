import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  h1 {
    font-weight: bold;
    color: #36363d;
  }
  @media (max-width: 800px) {
    width: 100%;
    h1 {
      text-align: center;
    }
  }
`;

export default Content;
