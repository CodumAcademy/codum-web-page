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

export const StartTitle = styled.h3`
  color: var(--text-color);
  font-size: 2.5rem;
  text-align: center;
  margin: 0 auto;
  margin-top: -2rem;
  width: 80%;
`;

export const StartDescription = styled.p`
  color: var(--text-color);
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
  width: 80%;
`;

export const ButtonContainer = styled.div`
  text-align: right;
  padding: 0.5rem;
  padding-right: 5rem;
  position: fixed;
  bottom: 0;
  right: 0;
  background: white;
  width: 60%;
`;
