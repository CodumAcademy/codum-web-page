import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt, AllowNull } from 'sequelize-typescript'
import Quiz from "../quiz";

@Table({
  tableName: "QuizCategories"
})
export default class QuizCategory extends Model<QuizCategory> {
  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column
  description: string;

  @HasMany(() => Quiz)
  quizzes: Quiz[];

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
