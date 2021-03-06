import Convocation from ".";

export const Model = Convocation;

export const typeDefinitions = `
  type Convocation {
    id: ID!
    description: String!
    requirements: String!
    fromDate: String!
    toDate: String!
    convocationRequirements: [ConvocationRequirement]
    convocationUsers: [ConvocationUser]
  }
  input ConvocationInput {
    description: String!
    fromDate: String!
    requirements: String!
    toDate: String!
  }
`;

export const queries = `
  currentConvocation: Convocation,
  lastConvocation: Convocation
`;

export const mutations = ``;

export const resolvers = {
  Query: {
    currentConvocation: async () => {
      var currentDate = new Date();
      const convocation = await Convocation.findOne({
        where: {
          fromDate: {
            $lte: currentDate
          },
          toDate: {
            $gte: currentDate
          }
        }
      });
      if (convocation) return convocation;

      return null;
    },
    lastConvocation: async () => {
      // change id for last convocation id
      const convocation = await Convocation.findOne({
        where: {
          id: 1
        }
      });
      if (convocation) return convocation;

      return null;
    }
  },
  Mutation: {},
  Convocation: {}
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
  Convocation: {}
};
