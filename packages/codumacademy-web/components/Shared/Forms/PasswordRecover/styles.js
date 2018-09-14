import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  ${ifProp(
    "terms",
    css`
      text-align: center;
      > input,
      span {
        display: inline-block;
        width: auto;
        text-align: center;
      }
      input {
        margin: 0;
        margin-right: 0.5rem;
        margin-top: -3rem;
        margin-bottom: 2rem;
      }
    `
  )};
`;

export const Input = styled.input`
  width: 90%;
  margin: 3rem auto;
  margin-top: 2rem;
  display: block;
`;

export const Message = styled.div`
  text-align: center;
  margin-top: -1.5rem;
  @keyframes loading {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  ${ifProp(
    {
      status: "sending"
    },
    css`
      width: 40px;
      height: 40px;
      margin: 0 auto;
      background-color: var(--green-1);
      border-radius: 100%;
      animation: loading 1s infinite ease-in-out;
    `
  )};
  ${ifProp(
    {
      status: "error"
    },
    css`
      > a {
        color: var(--green-2);
        display: block;
      }
    `
  )};
  ${ifProp(
    {
      status: "success"
    },
    css`
      color: var(--green-2);
    `
  )};
`;
