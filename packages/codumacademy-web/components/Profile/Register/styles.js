import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

export const Title = styled.h3`
  text-align: center;
  margin-top: 1rem;
  font-size: 1.8rem;
  color: var(--text-color);
  font-weight: bold;
`;

export const Container = styled.div`
  background: white;
`;

export const ProgressContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 1rem;
  width: 40%;
`;

export const ListContainer = styled.ul`
  list-style: none;
  margin-top: 3rem;
`;

export const ItemList = styled.li`
  background: white;
  margin-bottom: 1.5rem;
  .item-content {
    display: flex;
  }
  .checkbox {
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(103, 103, 103, 0.5);
    height: 16px;
    margin-right: 1rem;
    text-align: center;
    width: 16px;
    img {
      max-width: 90%;
    }
  }
  .text {
    color: var(--text-color);
    text-transform: lowercase;
    background: transparent;
    cursor: pointer;
    font-weight: bold;
    &.disabled {
      color: #848484;
    }
    &:first-letter {
      text-transform: uppercase;
    }
    ${ifProp(
      "checked",
      css`
        font-weight: normal;
      `
    )};
  }
  .help {
    cursor: pointer;
    margin-left: 5px;
    margin-top: -3px;
    width: 16px;
    &:hover {
      opacity: 0.6;
    }
  }
  .help-text {
    color: var(--text-color);
    font-weight: lighter;
    font-size: 0.9rem;
    margin-left: 2rem;
  }
  button {
    outline: none;
  }
`;

export const QuizAppContainer = styled.div`
  background: white;
  left: 0;
  top: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  transition: all ease 0.5s;
  ${ifProp(
    "isLoading",
    css`
      padding-left: 10%;
    `
  )};
`;

export const CantSchedule = styled.div`
  color: var(--text-color);
  a {
    color: var(--green-2);
  }
`;
