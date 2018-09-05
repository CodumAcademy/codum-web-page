import styled from "styled-components";

const Loading = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  background-color: var(--green-1);
  border-radius: 100%;
  animation: loading 1s infinite ease-in-out;
  @keyframes loading {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export default Loading;
