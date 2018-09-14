import { AfterCreate, Table, Column, Model, CreatedAt, HasMany, UpdatedAt, AllowNull, BelongsTo, ForeignKey } from 'sequelize-typescript';
import User from "../user";
import Convocation from "../convocation";
import QuizAnswer from "../quiz-answer";
import QuizQuestion from "../quiz-question";
import Quiz from "../quiz";
import QuizUserQuestion from "../quiz-user-question";

@Table({
  tableName: "QuizUserAnswers"
})
export default class QuizUserAnswer extends Model<QuizUserAnswer> {
  @Column
  addicionalText: string;

  @Column
  answers: string;

  @Column
  multiple: boolean;

  @ForeignKey(() => QuizAnswer)
  @Column
  quizAnswerId: number;

  @AllowNull(false)
  @ForeignKey(() => QuizQuestion)
  @Column
  quizQuestionId: number;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @AllowNull(false)
  @ForeignKey(() => Quiz)
  @Column
  quizId: number;

  @AllowNull(false)
  @ForeignKey(() => Convocation)
  @Column
  convocationId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Quiz)
  quiz: Quiz;

  @BelongsTo(() => QuizAnswer)
  quizAnswer: QuizAnswer;

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

  @AfterCreate
  static async changeUserQuestionState(instance: QuizUserAnswer) {
    const question = await QuizUserQuestion.find({
      where: {
        quizQuestionId: instance.quizQuestionId,
        userId: instance.userId
      }
    });
    const updated = await question.updateAttributes({
      resolved: true
    });
  }

}
