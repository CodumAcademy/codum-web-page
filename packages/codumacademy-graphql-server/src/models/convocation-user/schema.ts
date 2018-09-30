import ConvocationUser from ".";

export const Model = ConvocationUser;

export const typeDefinitions = `
  type ConvocationUser {
    id: ID!
    convocationId: Int!
    userId: Int!
    convocation: [Convocation]
    user: [User]
  }
  input ConvocationUserInput {
    convocationId: Int!
    userId: Int!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  ConvocationUser: {}
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
  ConvocationUser: {}
}
