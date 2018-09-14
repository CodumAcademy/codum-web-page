import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import QuizQuestion from "../quiz-question";

@Table({
  tableName: "QuizQuestionTypes"
})
export default class QuizQuestionType extends Model<QuizQuestionType> {

  @Column
  slug: string;

  @HasMany(() => QuizQuestion)
  quizQuestions: QuizQuestion[];

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
