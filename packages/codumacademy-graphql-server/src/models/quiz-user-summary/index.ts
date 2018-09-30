import { Table, Column, Model, CreatedAt, Default, HasMany, UpdatedAt, AllowNull, BelongsTo, ForeignKey } from 'sequelize-typescript';
import User from "../user";
import Quiz from "../quiz";
import Convocation from "../convocation";

@Table({
  tableName: "QuizUserSummaries"
})
export default class QuizUserSummary extends Model<QuizUserSummary> {
  @Default(false)
  @Column
  finished: boolean;

  @Default(false)
  @Column
  approved: boolean;

  @Default(0)
  @Column
  successAnswers: number;

  @Default(0)
  @Column
  failedAnswers: number;

  @Default(0)
  @Column
  totalAnswers: number;

  @AllowNull(false)
  @ForeignKey(() => Quiz)
  @Column
  quizId: number;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Convocation)
  @Column
  convocationId: number;

  @BelongsTo(() => Convocation)
  convocation: Convocation;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Quiz)
  quiz: Quiz;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
