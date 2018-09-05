import { AfterCreate, Default, Table, Column, Model, HasMany, ForeignKey, BelongsTo, AllowNull, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import QuizCategory from "../quiz-category";
import ConvocationRequirement from "../convocation-requirement";
import QuizQuestion from "../quiz-question";

@Table({
  tableName: "Quizzes"
})
export default class Quiz extends Model<Quiz> {
  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column
  description: string;

  @Default(false)
  @Column
  isPoll: boolean;

  @Column
  answersNumber: number;

  @ForeignKey(() => QuizCategory)
  @Column
  quizCategoryId: number;

  @ForeignKey(() => ConvocationRequirement)
  @Column
  convocationRequirementId: number;

  @BelongsTo(() => QuizCategory)
  quizCategory: QuizCategory;

  @BelongsTo(() => ConvocationRequirement)
  convocationRequirement: ConvocationRequirement;

  @HasMany(() => QuizQuestion)
  quizQuestions: QuizQuestion[];

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @AfterCreate
  static async addConvocationRequirementId(instance: Quiz) {
    const requirement = await ConvocationRequirement.findById(instance.convocationRequirementId)
    const updated = await requirement.updateAttributes({
      quizId: instance.id
    });
  }

}
