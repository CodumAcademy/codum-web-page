import Country from ".";

export const Model = Country;

export const typeDefinitions = `
  type Country {
    id: ID!
    sortname: String!
    name: String!
    states: [State]
    users: [User]
  }
  input CountryInput {
    sortname: String
    name: String
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  Country: {}
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
  Country: {}
}
