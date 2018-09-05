import { Table, Column, Model, CreatedAt, HasMany, UpdatedAt, AllowNull, ForeignKey, BelongsTo } from 'sequelize-typescript'
import Quiz from "../quiz";
import QuizAnswer from "../quiz-answer";
import QuizQuestionType from "../quiz-question-type";
import QuizUserAnswer from "../quiz-user-answer";
import QuizUserQuestion from "../quiz-user-question";

@Table({
  tableName: "QuizQuestions"
})
export default class QuizQuestion extends Model<QuizQuestion> {
  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column
  description: string;

  @ForeignKey(() => Quiz)
  @Column
  quizId: number;

  @ForeignKey(() => QuizQuestionType)
  @Column
  quizQuestionTypeId: number;

  @BelongsTo(() => Quiz)
  quiz: Quiz;

  @BelongsTo(() => QuizQuestionType)
  quizQuestionType: QuizQuestionType;

  @HasMany(() => QuizAnswer)
  quizAnswers: QuizAnswer[];

  @HasMany(() => QuizUserAnswer)
  quizUserAnswers: QuizUserAnswer[];

  @HasMany(() => QuizUserQuestion)
  quizUserQuestions: QuizUserQuestion[];

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
