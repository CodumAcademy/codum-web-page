import TypeIdentityDoc from ".";

export const Model = TypeIdentityDoc;

export const typeDefinitions = `
  type TypeIdentityDoc {
    id: ID!
    slug: String!
    name: String!
    users: [User]
  }
  input TypeIdentityDocInput {
    slug: String!
    name: String!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  TypeIdentityDoc: {}
};

export const authProtection = {
  crud: {
    read: false,
    add: true,
    update: true,
    destroy: true
  },
  Query: {},
  Mutation: {},
  TypeIdentityDoc: {}
}
