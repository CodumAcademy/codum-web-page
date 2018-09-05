import styled from "styled-components";

export const Content = styled.div`
  color: var(--text-color);
  .indent {
    padding-left: 1rem;
  }
`;

export const QuestionTitle = styled.h4`
  font-size: 1.2rem;
`;

export const Item = styled.div`
  padding: 0.5rem;
`;

export const AnswerContent = styled.p`
  background: #f5f5f5;
  border-radius: 0.2rem;
  font-size: 0.9rem;
  padding: 0.5rem;
  padding-bottom: 0.2rem;
  width: 96%;
  margin-left: 2%;
  &.success {
    border-left: #27ae60 4px solid;
  }
  &.failed {
    border-left: #e74c3c 4px solid;
  }
`;

export const P = styled.p`
  color: var(--text-color);
`;
