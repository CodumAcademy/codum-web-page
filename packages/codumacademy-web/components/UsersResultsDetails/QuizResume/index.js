import React from "react";
import PropTypes from "prop-types";
import { withHandlers } from "recompose";

import { QuestionTitle, Content, Item, AnswerContent, P } from "./styles";// eslint-disable-line

const QuizResume = props => (
  <Content>
    {props.answers.map(answer => (
      <Item key={answer.id}>
        <QuestionTitle
          dangerouslySetInnerHTML={{ __html: `-${answer.quizQuestion.title}` }}
        />
        {answer.multiple && (
          <AnswerContent className="success">
            {props.parseJSON(answer.answers).map(item => (
              <div key={item.id}>
                <p>- {item.answer}</p>
                {item.addicionalText && (
                  <P
                    className="indent"
                    dangerouslySetInnerHTML={{ __html: item.addicionalText }}
                  />
                )}
              </div>
            ))}
          </AnswerContent>
        )}
        {!answer.multiple && (
          <AnswerContent
            className={answer.quizAnswer.isSuccessAnswer ? "success" : "failed"}
            dangerouslySetInnerHTML={{ __html: answer.quizAnswer.answer }}
          />
        )}
      </Item>
    ))}
  </Content>
);

QuizResume.propTypes = {
  answers: PropTypes.array.isRequired,
  parseJSON: PropTypes.func.isRequired
};

const withFuncs = withHandlers({
  parseJSON: () => string => {
    const parsed = JSON.parse(string);
    delete parsed.multiple;
    const keys = Object.keys(parsed);
    const data = keys.map(key => parsed[key]);
    return data;
  }
});

export default withFuncs(QuizResume);
