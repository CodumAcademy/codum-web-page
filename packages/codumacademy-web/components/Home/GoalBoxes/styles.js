import styled from "styled-components";

export const GoalBoxesContainer = styled.div`
  background: url(/static/images/green-shape-2.svg) no-repeat;
  background-position: top left;
  background-size: 25%;
  padding-bottom: 5rem;
`;

export const GoalBoxesTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 5rem;
  text-align: center;
  @media (max-width: 620px) {
    margin: 0 auto;
    margin-bottom: 4rem;
    font-size: 1.8rem;
    width: 95%;
  }
`;

export const Boxes = styled.div`
  display: flex;
  color: var(--text-color);
  margin-bottom: 3rem;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
