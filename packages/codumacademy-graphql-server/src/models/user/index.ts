import {
  Table,
  Column,
  Model,
  Default,
  HasMany,
  ForeignKey,
  BelongsTo,
  IsEmail,
  Unique,
  AllowNull,
  CreatedAt,
  UpdatedAt
} from "sequelize-typescript";
import TypeIdentityDoc from "../typeidentitydoc";
import Country from "../country";
import State from "../state";
import City from "../city";
import QuizUserAnswer from "../quiz-user-answer";
import QuizUserQuestion from "../quiz-user-question";
import QuizUserSummary from "../quiz-user-summary";
import UserConvocationRequirement from "../user-convocation-requirement";
import UserScheduleMeeting from "../user-schedule-meeting";
import UserRequirementAuthorization from "../user-requirement-authorization";
import ConvocationUser from "../convocation-user";

@Table({
  tableName: "Users"
})
export default class User extends Model<User> {
  @AllowNull(false)
  @Column
  fullName: string;

  @AllowNull(false)
  @Unique
  @IsEmail
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @AllowNull(false)
  @Column
  birtday: Date;

  @AllowNull(false)
  @Unique
  @Column
  identityDoc: string;

  @AllowNull(false)
  @Column
  phone: string;

  @Column
  howDidYouFindUs: string;

  @Column
  howDidYouFindUsText: string;

  @AllowNull(false)
  @Column
  university: string;

  @AllowNull(false)
  @Column
  career: string;

  @AllowNull(false)
  @Column
  semester: string;

  @Column
  other: string;

  @Default(false)
  @Column
  isAdmin: boolean;

  @AllowNull(false)
  @ForeignKey(() => TypeIdentityDoc)
  @Column
  typeIdentityDocId: number;

  @AllowNull(false)
  @ForeignKey(() => Country)
  @Column
  countryId: number;

  @AllowNull(false)
  @ForeignKey(() => State)
  @Column
  stateId: number;

  @AllowNull(false)
  @ForeignKey(() => City)
  @Column
  cityId: number;

  @BelongsTo(() => TypeIdentityDoc)
  typeIdentityDoc: TypeIdentityDoc;

  @BelongsTo(() => Country)
  country: Country;

  @BelongsTo(() => State)
  state: State;

  @BelongsTo(() => City)
  city: City;

  @HasMany(() => QuizUserAnswer)
  quizUserAnswers: QuizUserAnswer[];

  @HasMany(() => QuizUserQuestion)
  quizUserQuestions: QuizUserQuestion[];

  @HasMany(() => QuizUserSummary)
  quizUserSummaries: QuizUserSummary[];

  @HasMany(() => UserConvocationRequirement)
  userConvocationRequirements: UserConvocationRequirement[];

  @HasMany(() => UserScheduleMeeting)
  userScheduleMeetings: UserScheduleMeeting[];

  @HasMany(() => UserRequirementAuthorization)
  userRequirementAuthorizations: UserRequirementAuthorization[];

  @HasMany(() => ConvocationUser)
  convocationUsers: ConvocationUser[];

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;
}
