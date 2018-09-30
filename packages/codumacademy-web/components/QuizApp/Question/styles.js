import styled from "styled-components";

export const Container = styled.div`
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  z-index: 3;
  transition: all ease 0.5s;
`;

export const QuestionTitle = styled.h3`
  color: var(--text-color);
  font-size: 1.4rem;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  pointer-events: none;
  text-align: right;
  padding: 0.5rem;
  padding-right: 5rem;
  position: fixed;
  bottom: 0;
  right: 0;
  bottom: 0rem;
  right: 0;
  background: white;
  width: 100%;
  > * {
    pointer-events: all;
  }
`;

export const Content = styled.div`
  max-height: 400px;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 0 2%;
`;

export const QuestionDescription = styled.div`
  font-size: 1rem;
  width: 100%;
`;
