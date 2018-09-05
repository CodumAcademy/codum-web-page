import UserScheduleMeeting from ".";

export const Model = UserScheduleMeeting;

export const typeDefinitions = `
  type UserScheduleMeeting {
    id: ID!
    date: String
    convocationId: Int!
    userId: Int!
    convocation: Convocation
    user: User
  }
  input UserScheduleMeetingInput {
    convocationId: Int!
    userId: Int!
  }
`;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {},
  Mutation: {},
  UserScheduleMeeting: {}
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
  UserScheduleMeeting: {}
}
