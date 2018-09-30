import React from "react";
import { withState, withHandlers, compose } from "recompose";
import PropTypes from "prop-types";

import Form from "./styles";

const Answers = ({
  answers,
  type,
  setQuestionAnswer,
  selectedAnswer,
  setQuestionAnswerMultiple,
  allowTextForCheckbox,
  setTextAreaValue
}) => (
  <Form>
    {answers.map(item => {
      if (type.slug === "Simple") {
        return (
          <div className="field" key={item.id}>
            <label htmlFor={`option-${item.id}`}>
              <input
                type="radio"
                name="answer"
                id={`option-${item.id}`}
                value={item.id}
                onChange={() => setQuestionAnswer(item)}
                required
              />
              <span dangerouslySetInnerHTML={{ __html: item.answer }} />{/* eslint-disable-line*/}
            </label>
            {item.allowAddicionalText &&
              selectedAnswer.id === item.id && (
                <textarea
                  key={`${item.id}1`}
                  onChange={e =>
                    setQuestionAnswer({
                      ...item,
                      addicionalText: e.target.value
                    })
                  }
                />
              )}
          </div>
        );
      }
      if (type.slug === "Multiple") {
        return (
          <div className="field" key={item.id}>
            <label htmlFor={`option-${item.id}`}>
              <input
                type="checkbox"
                name="answer"
                id={`option-${item.id}`}
                value={item.id}
                onChange={e => setQuestionAnswerMultiple(item, e)}
              />
              <span dangerouslySetInnerHTML={{ __html: item.answer }} />{/* eslint-disable-line*/}
            </label>
            {allowTextForCheckbox(item) && (
              <textarea
                key={`${item.id}1`}
                required
                onChange={e =>
                  setQuestionAnswerMultiple(
                    {
                      ...item,
                      addicionalText: e.target.value
                    },
                    e,
                    true
                  )
                }
              />
            )}
          </div>
        );
      }
      if (type.slug === "Abierta") {
        return (
          <div key={item.id} className="field full-textarea">
            <textarea onChange={setTextAreaValue(item)} required />
          </div>
        );
      }
      return null;
    })}
  </Form>
);

Answers.propTypes = {
  answers: PropTypes.array.isRequired,
  setQuestionAnswer: PropTypes.func.isRequired,
  selectAnswer: PropTypes.func.isRequired,
  setTextAreaValue: PropTypes.func.isRequired,
  setQuestionAnswerMultiple: PropTypes.func.isRequired,
  allowTextForCheckbox: PropTypes.func.isRequired,
  type: PropTypes.object.isRequired,
  selectedAnswer: PropTypes.object.isRequired
};

const enhance = compose(
  withState("selectedAnswer", "setSelectedAnswer", {}),
  withHandlers({
    setTextAreaValue: props => answer => e => {
      const data = {
        ...answer,
        addicionalText: e.target.value
      };
      props.setQuestionAnswer(data);
      props.selectAnswer(data);
    },
    setQuestionAnswer: props => answer => {
      props.setSelectedAnswer(answer);
      props.selectAnswer(answer);
    },
    setQuestionAnswerMultiple: props => (answer, e, isTextArea) => {
      const obj = {
        multiple: true,
        ...props.currentSelectedAnswer
      };
      if (!props.selectedAnswer[answer.id]) obj[answer.id] = {};

      if (!isTextArea) {
        if (e && e.target.checked)
          obj[answer.id] = {
            ...answer,
            addicionalText: obj[answer.id].addicionalText
          };
        if (e && !e.target.checked) delete obj[answer.id];
      }
      if (isTextArea) obj[answer.id] = answer;

      props.setSelectedAnswer(obj);
      props.selectAnswer(obj);
    },
    allowTextForCheckbox: props => answer => {
      if (!props.selectedAnswer[answer.id]) return false;
      if (props.selectedAnswer[answer.id].allowAddicionalText) return true;

      return false;
    }
  })
);

export default enhance(Answers);
