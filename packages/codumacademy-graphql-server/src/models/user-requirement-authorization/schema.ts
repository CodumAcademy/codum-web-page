import UserRequirementAuthorization from ".";

export const Model = UserRequirementAuthorization;

export const typeDefinitions = `
  type UserRequirementAuthorization {
    id: ID!
    approved: Boolean
    convocationRequirementId: Int!
    userId: Int!
    convocationRequirement: Quiz
    user: User
  }
  input UserRequirementAuthorizationInput {
    convocationRequirementId: Int!
    userId: Int!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  UserRequirementAuthorization: {}
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
  UserRequirementAuthorization: {}
}
