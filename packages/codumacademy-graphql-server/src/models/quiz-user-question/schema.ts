import QuizUserQuestion from ".";

export const Model = QuizUserQuestion;

export const typeDefinitions = `
  type QuizUserQuestion {
    id: ID!
    resolved: Boolean
    quizQuestionId: Int!
    quizId: Int!
    userId: Int!
    convocationId: Int!
    user: User
    quiz: Quiz
    quizQuestion: QuizQuestion
    convocation: Convocation
  }
  input QuizUserQuestionInput {
    quizQuestionId: Int!
    userId: Int!
    quizId: Int!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  QuizUserQuestion: {}
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
  QuizUserQuestion: {}
}
