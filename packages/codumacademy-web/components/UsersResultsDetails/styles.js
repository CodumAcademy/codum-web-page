import styled from "styled-components";

export const Container = styled.div`
  background: white;
  color: var(--text-color);
  box-shadow: 0px -2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 0.5rem;
  padding-top: 0.5rem;
  max-width: 90%;
  margin: 0 auto;
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
`;

export const RequirementsContainer = styled.ul`
  list-style: none;
  padding-left: 1rem;
  & li {
    padding: 0.3rem;
    > h3 button {
      cursor: pointer;
      padding: 1rem;
      text-transform: lowercase;
      &:first-letter {
        text-transform: uppercase;
      }
      .arrow {
        transition: all ease 0.5s;
        width: 16px;
        vertical-align: middle;
        margin-left: 10px;

        &.actived {
          transform: rotate(-180deg);
        }
      }
    }
  }
`;

export const QuickResume = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > .item {
    min-width: 200px;
    text-align: center;
    h5 {
      font-size: 1rem;
    }
  }
  & > .icon {
    img {
      width: 30px;
    }
  }
`;

export const ItemContent = styled.div`
  padding: 0.5rem;
`;

export const UserData = styled.div`
  background: #f5f5f5;
  border: thin solid #ddd;
  border-radius: 0.2rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 90%;
  padding-bottom: 0;
  div {
    margin-bottom: 1rem;
    width: 25%;
  }
  h4 {
    font-weight: bold;
  }
`;
