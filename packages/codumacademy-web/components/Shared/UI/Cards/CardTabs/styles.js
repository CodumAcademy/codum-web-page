import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

export const CardTabsContainer = styled.div`
  box-shadow: -3px 3px 4px 0 rgba(51, 51, 51, 0.2);
  border-radius: 0.6rem 0.5rem 0.2rem 0.2rem;
  margin: 0 auto;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
`;
export const CardLabelsContainer = styled.div`
  position: relative;
  display: flex;
  position: relative;
  height: 45px;
  margin-left: 200px;
`;
export const CardLabel = styled.div`
  background: white;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 14px;
  box-sizing: border-box;
  box-shadow: 2px -2px 1px 0 rgba(51, 51, 51, 0.2);
  text-align: center;
  cursor: pointer;
  width: 200px;
  position: absolute;
  left: 0;
  transition: all ease 0.5s;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${ifProp(
    "isActived",
    css`
      margin-left: 0;
      z-index: 2;
      left: -200px;
    `
  )};
`;
export const CardContent = styled.div`
  background: white;
  padding: 0.5rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  height: 500px;
  margin-top: 2px;
  border-radius: 0 0.5rem 0 0;
  box-shadow: 0px -2px 3px rgba(51, 51, 51, 0.2);
`;
export const CardItemContent = styled.div`
  background: white;
  padding: 1rem;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
`;
export const CardItem = styled.div`
  background: white;
  position: absolute;
  height: 480px;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  transition: all ease 0.5s;
  opacity: 0;
  transform: translateX(-2rem);
  ${ifProp(
    "isActived",
    css`
      transform: translateX(0);
      opacity: 1;
      z-index: 1;
    `
  )};
`;
