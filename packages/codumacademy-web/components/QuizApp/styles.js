import styled from "styled-components";

export const Container = styled.div`
  background: white;
  position: relative;
  height: 500px;
  overflow: hidden;
`;

export const ProgressBarContainer = styled.div`
  width: 30%;
  position: fixed;
  left: 30%;
  bottom: 3%;
  &:hover {
    opacity: 0.3;
  }
  z-index: 3;
`;
