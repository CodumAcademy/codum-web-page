import QuizQuestionType from ".";

export const Model = QuizQuestionType;

export const typeDefinitions = `
  type QuizQuestionType {
    id: ID!
    slug: String!
    quizQuestions: [QuizQuestion]
  }
  input QuizQuestionTypeInput {
    slug: String!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  QuizQuestionType: {}
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
  QuizQuestionType: {}
}
