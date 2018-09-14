import styled from "styled-components";

const Form = styled.form`
  input[type="checkbox"] {
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(103, 103, 103, 0.5);
    margin-right: 0.5rem;
    margin-left: 1rem;
    text-align: center;
  }
  input[type="radio"] {
    background: #fff;
    border-radius: 50%;
    height: 16px;
    margin-right: 0.5rem;
    margin-left: 1rem;
    text-align: center;
    width: 16px;
  }
  span {
    color: var(--text-color);
    font-size: 1rem;
    cursor: pointer;
  }
  textarea {
    border-radius: 0.3rem;
    display: block;
    background: #f3f3f3;
    border: thin solid #ddd;
    margin-left: 1rem;
    height: 4rem;
    width: 40%;
    padding: 0.3rem;
  }
  .field {
    margin-bottom: 0.5rem;
    &.full-textarea {
      textarea {
        height: 6rem;
        margin: 0 auto;
        width: 80%;
      }
    }
  }
`;

export default Form;
