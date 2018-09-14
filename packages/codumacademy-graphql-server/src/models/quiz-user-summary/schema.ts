import QuizUserSummary from ".";

export const Model = QuizUserSummary;

export const typeDefinitions = `
  type QuizUserSummary {
    id: ID!
    finished: Boolean
    approved: Boolean
    successAnswers: Int
    failedAnswers: Int
    totalAnswers: Int
    quizId: Int!
    userId: Int!
    convocationId: Int!
    quiz: Quiz
    user: User
    convocation: Convocation
  }
  input QuizUserSummaryInput {
    successAnswers: Int
    failedAnswers: Int
    quizId: Int!
    userId: Int!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  QuizUserSummary: {}
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
  QuizUserSummary: {}
}
