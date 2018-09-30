import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
  a {
    color: var(--text-color);
  }
  label {
    color: var(--text-color);
    margin: 0.5rem 0;
    > span,
    input,
    select {
      display: block;
    }
    input {
      box-sizing: border-box;
      width: 100%;
    }
    select {
      height: 2.2rem;
      width: 100%;
      position: relative;
    }
    .select-wrapper {
      width: 50%;
    }
  }
  .width-100 {
    width: 100%;
  }
  .width-50 {
    width: 49%;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  .margin-2-percent {
    margin-right: 2%;
  }
  .offset-50 {
    width: 50%;
  }
  .terms {
    margin-top: 1rem;
    text-align: center;
    input,
    span {
      display: inline;
      width: auto;
    }
    span {
      margin-left: 0.5rem;
    }
  }
  .select-wrapper {
    position: relative;
    :after {
      content: " ";
      background: white url(/static/images/arrow-1.png) no-repeat;
      background-position: center center;
      position: absolute;
      right: 3px;
      top: 0;
      width: 24px;
      border-radius: 1rem;
      height: 100%;
      pointer-events: none;
    }
    &.disabled {
      &:after {
        background: #e2e2e2;
      }
    }
  }
  .how-did-you-find-us {
    margin-top: 1rem;
    label {
      display: block;
    }
    input,
    span {
      display: inline;
      width: auto;
      margin-left: 0.5rem;
    }
  }
`;

export const ErrorContent = styled.div`
  color: #d63031;
  margin-top: 0.5rem;
`;
