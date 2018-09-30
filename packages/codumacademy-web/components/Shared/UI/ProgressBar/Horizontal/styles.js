import styled from "styled-components";
import { prop } from "styled-tools";

export const Label = styled.div`
  color: var(--text-color);
`;

export const Container = styled.div`
  text-align: center;
  width: 100%;
`;

export const ProgressBar = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(193, 193, 193, 0.5);
  border: thin solid #cacaca;
  width: 100%;
`;

export const Progress = styled.div`
  background: var(--green-2);
  border-radius: 8px;
  height: 20px;
  transition: all ease 0.5s;
  width: ${prop("progress")}%;
`;
