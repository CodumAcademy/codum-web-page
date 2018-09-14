import { Table, Default, Column, Model, CreatedAt, HasMany, UpdatedAt, AllowNull, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Convocation from "../convocation";
import User from "../user";
import QuizQuestion from "../quiz-question";
import Quiz from "../quiz";

@Table({
  tableName: "QuizUserQuestions"
})
export default class QuizUserQuestion extends Model<QuizUserQuestion> {
  @Default(false)
  @Column
  resolved: boolean;

  @AllowNull(false)
  @ForeignKey(() => QuizQuestion)
  @Column
  quizQuestionId: number;

  @AllowNull(false)
  @ForeignKey(() => Quiz)
  @Column
  quizId: number;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @AllowNull(false)
  @ForeignKey(() => Convocation)
  @Column
  convocationId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Quiz)
  quiz: Quiz;

  @BelongsTo(() => QuizQuestion)
  quizQuestion: QuizQuestion;

  @BelongsTo(() => Convocation)
  convocation: Convocation;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
