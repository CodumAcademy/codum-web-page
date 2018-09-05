import ConvocationRequirement from ".";

export const Model = ConvocationRequirement;

export const typeDefinitions = `
  type ConvocationRequirement {
    id: ID!
    description: String!
    helpText: String!
    success: Boolean
    required: Boolean
    withQuiz: Boolean
    needAuthorization: Boolean
    requiredApprove: Boolean
    quizId: Int
    convocationId: Int!
    quiz: Quiz
    convocation: Convocation
  }
  input ConvocationRequirementInput {
    description: String!
    helpText: String!
    convocationId: Int!
    quizId: Int
    required: Boolean
    withQuiz: Boolean
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  ConvocationRequirement: {}
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
  ConvocationRequirement: {}
}
