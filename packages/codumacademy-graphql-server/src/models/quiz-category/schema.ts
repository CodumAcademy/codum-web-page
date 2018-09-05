import QuizCategory from ".";

export const Model = QuizCategory;

export const typeDefinitions = `
  type QuizCategory {
    id: ID!
    title: String!
    description: String!
    quizzes: [Quiz]
  }
  input QuizCategoryInput {
    title: String!
    description: String!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  QuizCategory: {}
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
  QuizCategory: {}
}
