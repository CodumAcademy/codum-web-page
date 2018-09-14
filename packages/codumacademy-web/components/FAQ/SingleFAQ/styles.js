import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

export const Answer = styled.div`
  color: var(--text-color);
  display: none;
  margin-bottom: 2rem;
  ${ifProp(
    "isActived",
    css`
      display: block;
    `
  )};
`;

export const Container = styled.div`
  color: var(--text-color);
  h3 {
    margin-bottom: 1.8rem;
  }
`;

export const ToggleButton = styled.button`
  color: #9d9697;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  background: transparent;
  outline: none;
  text-align: left;
  transition: all ease 0.3s;
  position: relative;
  padding-top: 5px;
  padding-right: 5px;
  &::after {
    content: "";
    background: url(/static/images/arrow-1.png) no-repeat;
    position: absolute;
    top: 2px;
    right: -25px;
    width: 20px;
    height: 20px;
    transition: all ease 0.6s;
  }
  ${ifProp(
    "isActived",
    css`
      color: var(--green-2);
      background: white;
      &::after {
        transform: rotate(180deg);
        top: -5px;
        right: -25px;
      }
    `
  )};
`;
