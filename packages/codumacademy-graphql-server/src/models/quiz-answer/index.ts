import { Table, Column, Model, CreatedAt, HasMany, Default, UpdatedAt, AllowNull, BelongsTo, ForeignKey } from 'sequelize-typescript';
import QuizQuestion from "../quiz-question";
import QuizUserAnswer from "../quiz-user-answer";

@Table({
  tableName: "QuizAnswers"
})
export default class QuizAnswer extends Model<QuizAnswer> {
  @AllowNull(false)
  @Column
  answer: string;

  @Default(false)
  @Column
  isSuccessAnswer: boolean;

  @Default(false)
  @Column
  allowAddicionalText: boolean;

  @AllowNull(false)
  @ForeignKey(() => QuizQuestion)
  @Column
  quizQuestionId: number;

  @BelongsTo(() => QuizQuestion)
  quizQuestion: QuizQuestion;

  @HasMany(() => QuizUserAnswer)
  quizUserAnswers: QuizUserAnswer[];

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
