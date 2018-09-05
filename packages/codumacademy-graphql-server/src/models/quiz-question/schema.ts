import QuizQuestion from ".";

export const Model = QuizQuestion;

export const typeDefinitions = `
  type QuizQuestion {
    id: ID!
    title: String!
    description: String!
    quizId: Int!
    quizQuestionTypeId: Int!
    quiz: Quiz
    quizQuestionType: QuizQuestionType
    quizAnswers: [QuizAnswer]
    quizUserAnswers: [QuizUserAnswer]
    quizUserQuestions: [QuizUserQuestion]
  }
  input QuizQuestionInput {
    title: String!
    description: String!
    quizId: Int!
    quizQuestionTypeId: Int!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  QuizQuestion: {}
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
  QuizQuestion: {}
}
