import UserConvocationRequirement from ".";

export const Model = UserConvocationRequirement;

export const typeDefinitions = `
  type UserConvocationRequirement {
    id: ID!
    completed: Boolean
    convocationRequirementId: Int!
    userId: Int!
    convocationRequirement: ConvocationRequirement
    user: User
  }
  input UserConvocationRequirementInput {
    convocationRequirementId: Int!
    userId: Int!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  UserConvocationRequirement: {}
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
  UserConvocationRequirement: {}
}
