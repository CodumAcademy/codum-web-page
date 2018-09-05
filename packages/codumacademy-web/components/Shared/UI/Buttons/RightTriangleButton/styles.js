import styled from "styled-components";
import { prop } from "styled-tools";

const Button = styled.button`
  background: var(--green-2);
  color: white;
  padding: 0.6rem 2rem;
  border-radius: 0.5rem 0 0 0.5rem;
  margin: 0 auto;
  margin-top: 0.6rem;
  outline: none;
  cursor: pointer;
  transition: all ease 0.4s;
  min-width: 140px;
  width: ${prop("width")};
  position: relative;
  &:after {
    content: "";
    position: absolute;
    right: -23px;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 0 17px 23px;
    border-color: transparent transparent transparent var(--green-2);
  }
  &:hover {
    background: var(--green-3);
    &:after {
      border-color: transparent transparent transparent var(--green-3);
    }
  }
  ${prop("customStyle")};
`;

export default Button;
