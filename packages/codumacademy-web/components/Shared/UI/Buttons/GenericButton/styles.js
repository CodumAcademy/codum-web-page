import styled from "styled-components";
import { prop } from "styled-tools";

const Button = styled.button`
  background: var(--green-2);
  color: white;
  padding: 0.6rem 2rem;
  border-radius: 1rem;
  margin: 0 auto;
  margin-top: 0.6rem;
  outline: none;
  cursor: pointer;
  transition: all ease 0.4s;
  min-width: 140px;
  width: ${prop("width")};
  &:hover {
    background: var(--green-3);
  }
  ${prop("customStyle")};
`;

export default Button;
