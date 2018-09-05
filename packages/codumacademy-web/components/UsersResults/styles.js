import styled from "styled-components";

export const Container = styled.div`
  background: white;
  box-shadow: 0px -2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 0.5rem;
  padding-top: 0.5rem;
  max-width: 90%;
  margin: 0 auto;
  * {
    outline: none;
  }
`;

export const Title = styled.h3`
  text-align: center;
  margin-top: 1rem;
  font-size: 2rem;
  color: var(--text-color);
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Anchor = styled.a`
  text-align: center;
  color: var(--green-2);
  display: block;
`;

export const Status = styled.div`
  text-align: center;
  span {
    padding: 0.3rem;
    border-radius: 0.5rem;
    &.in-progress {
      background: #ffeaa7;
    }
    &.success {
      background: #27ae60;
      color: white;
    }
    &.failed {
      background: #e74c3c;
      color: white;
    }
  }
`;

export const ListRequirements = styled.ul`
  position: relative;
  list-style: none;
  text-align: center;
  margin-bottom: 2rem;
  li {
    text-align: left;
    margin: 0 auto;
    width: 40%;
    span {
      margin-left: 0.5rem;
      text-transform: lowercase;
      &:first-letter {
        text-transform: uppercase;
      }
    }
  }
`;

export const DownloadIconContainer = styled.div`
  text-align: right;
`;

export const DownloadImage = styled.img`
  cursor: pointer;
  margin-right: 1rem;
  width: 25px;
  &:hover {
    opacity: 0.6;
  }
`;
