import City from ".";

export const Model = City;

export const typeDefinitions = `
  type City {
    id: ID!
    name: String!
    stateId: Int!
    state: State
    users: [User]
  }
  input CityInput {
    name: String!
    stateId: Int!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  City: {}
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
  City: {}
}
