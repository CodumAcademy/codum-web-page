import Quiz from ".";

import { generateQuestionsOrGetQuiz, getQuestion, setAnswer } from "./resolvers";
import { getUserId } from "../../utils/auth";

export const Model = Quiz;

export const typeDefinitions = `
  type Quiz {
    id: ID!
    title: String!
    description: String!
    answersNumber: Int!
    isPoll: Boolean
    quizCategoryId: Int
    convocationRequirementId: Int!
    quizCategory: QuizCategory
    convocationRequirement: ConvocationRequirement
    quizQuestions: [QuizQuestion]
  }
  input QuizInput {
    title: String!
    description: String!
    answersNumber: Int!
    isPoll: Boolean
    convocationRequirementId: Int!
  }
  type QuizStatus {
    resolved: Int
    total: Int
    question: QuizQuestion
    summary: QuizUserSummary
    convocationRequirement: UserConvocationRequirement
    requiredApprove: Boolean
  }
`;

export const queries = `
  getQuestion(quizId: Int!): QuizStatus
`;

export const mutations = `
  generateQuestionsOrGetQuiz(quizId: Int!): Quiz
  setAnswer(data: QuizUserAnswerInput!): QuizStatus
`;

export const resolvers = {
  Query: {
    getQuestion
  },
  Mutation: {
    generateQuestionsOrGetQuiz,
    setAnswer
  },
  Quiz: {}
};

export const authProtection = {
  crud: {
    read: true,
    add: true,
    update: true,
    destroy: true
  },
  Query: {},
  Mutation: {},
  Quiz: {}
}
