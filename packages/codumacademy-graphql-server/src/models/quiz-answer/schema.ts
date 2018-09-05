import QuizAnswer from ".";

export const Model = QuizAnswer;

export const typeDefinitions = `
  type QuizAnswer {
    id: ID!
    answer: String!
    isSuccessAnswer: Boolean
    allowAddicionalText: Boolean
    quizQuestionId: Int!
    quizQuestion: QuizQuestion
    quizUserAnswers: [QuizUserAnswer]
  }
  input QuizAnswerInput {
    answer: String!
    isSuccessAnswer: Boolean
    allowAddicionalText: Boolean
    quizQuestionId: Int!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  QuizAnswer: {}
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
  QuizAnswer: {}
}
