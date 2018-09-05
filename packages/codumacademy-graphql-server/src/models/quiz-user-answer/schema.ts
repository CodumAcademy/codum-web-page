import QuizUserAnswer from ".";

export const Model = QuizUserAnswer;

export const typeDefinitions = `
  type QuizUserAnswer {
    id: ID!
    addicionalText: String
    multiple: Boolean
    answers: String
    quizAnswerId: Int
    quizQuestionId: Int!
    userId: Int!
    quizId: String!
    convocationId: Int!
    user: User
    quiz: Quiz
    quizAnswer: QuizAnswer
    quizQuestion: QuizQuestion
    convocation: Convocation
  }
  input QuizUserAnswerInput {
    addicionalText: String
    quizAnswerId: String!
    quizId: Int!
    quizQuestionId: Int!
    multiple: Boolean
    answers: String
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  QuizUserAnswer: {}
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
  QuizUserAnswer: {}
}
