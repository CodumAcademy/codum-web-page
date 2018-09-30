import * as bcrypt from 'bcryptjs';
import User from ".";
import { signup, login, verify, getUserId } from "../../utils/auth";
import defaultResolvers from "../crud-resolvers";
import generateTemplate from "../../utils/recover-password-email";
import sendEmail from "../../utils/send-email";

export const Model = User;

export const typeDefinitions = `
  type User {
    id: ID!
    fullName: String!
    email: String!
    password: String!
    birtday: String!
    identityDoc: String!
    phone: String!
    isAdmin: Boolean
    howDidYouFindUs: String
    howDidYouFindUsText: String
    typeIdentityDocId: Int!
    countryId: Int!
    stateId: Int!
    cityId: Int!

    typeIdentityDoc: TypeIdentityDoc
    country: Country
    state: State
    city: City
    quizUserAnswers: [QuizUserAnswer]
    quizUserQuestions: [QuizUserQuestion]
    quizUserSummaries: [QuizUserSummary]
    userConvocationRequirements: [UserConvocationRequirement]
    userScheduleMeetings: [UserScheduleMeeting]
    userRequirementAuthorizations: [UserRequirementAuthorization]
    convocationUsers: [ConvocationUser]

    createdAt: String
    updatedAt: String
  }

  type AuthUser {
    id: ID!
    fullName: String!
    email: String!
    birtday: String!
    identityDoc: String!
    phone: String!
    isAdmin: Boolean
    howDidYouFindUs: String
    howDidYouFindUsText: String

    typeIdentityDocId: Int!
    countryId: Int!
    stateId: Int!
    cityId: Int!

    typeIdentityDoc: TypeIdentityDoc
    country: Country
    state: State
    city: City
    quizUserAnswers: [QuizUserAnswer]
    quizUserQuestions: [QuizUserQuestion]
    quizUserSummaries: [QuizUserSummary]
    userConvocationRequirements: [UserConvocationRequirement]
    userScheduleMeetings: [UserScheduleMeeting]
    userRequirementAuthorizations: [UserRequirementAuthorization]
    convocationUsers: [ConvocationUser]

    createdAt: String
    updatedAt: String
  }

  type AuthData {
    token: String!
    user: AuthUser
  }

  input SignUpInput {
    fullName: String!
    email: String!
    password: String!
    birtday: String!
    identityDoc: String!
    phone: String!
    howDidYouFindUs: String!
    howDidYouFindUsText: String
    typeIdentityDocId: Int!
    countryId: Int!
    stateId: Int!
    cityId: Int!
  }

`;

export const queries = `
  verify: AuthData
`;

export const mutations = `
  login(email: String!, password: String!): AuthData
  signup(user: SignUpInput): AuthData
  updateUserField(field: String!, value: String!): AppMessage
  changePassword(currentPassword: String!, newPassword: String!): AppMessage
  setNewPassword(email: String!): AppMessage
`;

const allowToIndividualUpdate = ["fullName", "birtday", "phone", "typeIdentityDocId", "identityDoc", "stateId", "cityId"];

export const authProtection = {
  crud: {
    read: true,
    // add: true,
    // update: true,
    destroy: true
  },
  Query: {},
  Mutation: {},
  User: {}
}

const { crudResolver } = defaultResolvers(User, authProtection);

const { associationsResolver } = crudResolver();

export const resolvers = {
  Query: {
    verify: async (parent, args, ctx, info) => await verify(ctx)
  },
  Mutation: {
    login,
    signup,
    updateUserField: async (_, args, ctx, info) => {
      const { id } = await getUserId(ctx);
      const { field, value } = args;
      if (allowToIndividualUpdate.indexOf(field) !== -1 && id) {
        const user = await User.findById(id);
        const updatedUser = await user.updateAttributes({ [field]: value });
        if (updatedUser) {
          return {
            message: "Ok",
            success: true,
            error: false
          }
        }
        return {
          message: "Record error",
          success: false,
          error: true
        }
      }
      return {
        message: "Invalid token",
        success: false,
        error: true
      }
    },
    changePassword: async (_, args, ctx, info) => {
      const { id } = await getUserId(ctx);
      const { currentPassword, newPassword } = args;
      if (id) {
        const user = await User.findById(id);
        const valid = await bcrypt.compare(currentPassword, user.password);
        if (valid) {
            const password = await bcrypt.hash(newPassword, 10);
            const updatedUser = await user.updateAttributes({ password });
            if (updatedUser) {
              return {
                message: "Ok",
                success: true,
                error: false
              }
            }
            return {
              message: "Record error",
              success: false,
              error: true
            }
        }
        else
          return {
            message: "El password actual es incorrecto",
            success: false,
            error: true
          }
      }
    },
    setNewPassword: async (_, args, ctx) => {
      const user = await User.find({
        where: {
          email: args.email
        }
      });
      if (user) {
        const newPassword = Math.random().toString(36).substring(5);
        const template = generateTemplate(newPassword);
        const password = await bcrypt.hash(newPassword, 10);
        const updated = await user.updateAttributes({ password  });
        await sendEmail(user.email, "codumacademy@imaginamos.co", "Codum Academy - Recuperar contraseña", template);
        return {
          success: true,
          message: "ok",
          error: false
        }
      }
      return {
        success: true,
        message: "ok",
        error: false
      }
    }
  },
  User: {},
  AuthUser: {
    ...associationsResolver
  }
};
