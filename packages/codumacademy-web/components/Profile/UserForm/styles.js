import styled from "styled-components";

export const UserFormContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  position: relative;
`;

export const Title = styled.h3`
  text-align: center;
  margin-top: 1rem;
  font-size: 1.8rem;
  color: var(--text-color);
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
`;

export const EditButton = styled.img`
  cursor: pointer;
  width: 25px;
  position: absolute;
  right: 0;
`;
