import styled, { css } from "styled-components";
import { ifProp, prop } from "styled-tools";

export const Container = styled.div`
  position: fixed;
  visibility: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  & > div {
    width: 100%;
  }
  ${ifProp(
    "isVisible",
    css`
      display: flex;
      visibility: visible;
    `
  )};
`;

export const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ModalContainer = styled.div`
  border-radius: 8px;
  background-color: #fcfcfc;
  box-shadow: 0 2px 4px 0 rgba(174, 174, 174, 0.5);
  padding: 3rem 2rem;
  width: 40%;
  position: relative;
  ${ifProp(
    "borderLess",
    css`
      padding: 0;
    `
  )};
  @media (max-width: 950px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 80%;
    padding: 1rem;
    padding-bottom: 5rem;
  }
`;

export const ModalContent = styled.div`
  border-radius: 8px;
  position: relative;
  overflow: auto;
  max-height: 80vh;
  ${prop("customStyle")};
`;
export const CloseButton = styled.button`
  background: transparent;
  cursor: pointer;
  display: flex;
  outline: none;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  height: 25px;
  width: 25px;
  position: absolute;
  right: 1rem;
  top: 1rem;
  user-select: none;
  z-index: 9;
  @media (max-width: 768px) {
    background: var(--green-2);
    border-radius: 5px;
    color: white;
    box-shadow: 0 0 3px rgba(51, 51, 51, 0.9);
    font-size: 1.2rem;
    padding: 0.2rem;
    font-weight: bold;
    right: -10px;
    top: -10px;
  }
  ${ifProp(
    "borderLess",
    css`
      background: white;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
      color: var(--green-1);
      right: -1rem;
      top: -1rem;
      z-index: 2;
      border-radius: 50%;
      height: 30px;
      width: 30px;
    `
  )};
`;
