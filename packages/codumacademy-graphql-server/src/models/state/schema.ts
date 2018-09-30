import State from ".";
import CRUDRepository from "../../repositories/CRUDRepository";

const crudRepository = new CRUDRepository(State);

export const Model = State;

export const typeDefinitions = `
  type State {
    id: ID!
    name: String!
    countryId: Int!
    country: Country
    cities: [City]
    users: [User]
  }
  input StateInput {
    name: String!
    countryId: Int!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  State: {},
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
  State: {}
}
