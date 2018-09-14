import styled from "styled-components";

export const Container = styled.div`
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FinishTitle = styled.h3`
  color: var(--text-color);
  font-size: 2.5rem;
  text-align: center;
  margin-top: -2rem;
`;

export const FinishDescription = styled.p`
  color: var(--text-color);
  margin-top: 3rem;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  text-align: right;
  padding: 0.5rem;
  padding-right: 5rem;
  position: fixed;
  bottom: 0;
  right: 0;
  background: white;
  width: 100%;
`;
