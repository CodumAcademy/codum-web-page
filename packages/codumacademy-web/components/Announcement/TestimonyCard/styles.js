import styled from "styled-components";

export const Container = styled.button`
  border-radius: 8px;
  background-color: #fcfcfc;
  box-shadow: 0 2px 11px 0 rgba(187, 187, 187, 0.5);
  cursor: pointer;
  width: 25%;
  padding: 0.5rem;
  outline: none;
  margin-bottom: 2rem;
  &:hover {
    .overlay {
      background: rgba(0, 0, 0, 0);
    }
  }
  @media (max-width: 850px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const CardHead = styled.div`
  position: relative;
  img {
    max-width: 100%;
  }
`;

export const CardTitle = styled.h5`
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0.5rem auto;
  text-align: left;
`;

export const CardDescription = styled.p`
  color: var(--text-color);
  text-align: left;
`;

export const CardThumbnail = styled.img`
  border-radius: 8px;
  width: 100%;
`;

export const CardPlay = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  margin-left: -35px;
  margin-top: -35px;
  z-index: 2;
`;

export const CardOverlay = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 3px;
  z-index: 1;
  transition: all ease 0.5s;
`;
