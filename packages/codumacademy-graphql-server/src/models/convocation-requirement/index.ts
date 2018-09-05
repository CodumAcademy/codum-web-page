import { Default, Table, Column, Model, ForeignKey, BelongsTo, AllowNull, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import Quiz from "../quiz";
import Convocation from "../convocation";

@Table({
  tableName: "ConvocationRequirements"
})
export default class ConvocationRequirement extends Model<ConvocationRequirement> {
  @AllowNull(false)
  @Column
  description: string;

  @Column
  helpText: string;

  @Default(false)
  @Column
  success: boolean;

  @Default(false)
  @Column
  required: boolean;

  @Default(false)
  @Column
  needAuthorization: boolean;
  
  @Default(false)
  @Column
  requiredApprove: boolean;

  @Default(false)
  @Column
  withQuiz: boolean;

  @ForeignKey(() => Quiz)
  @Column
  quizId: number;

  @ForeignKey(() => Convocation)
  @Column
  convocationId: number;

  @BelongsTo(() => Quiz)
  quiz: Quiz;

  @BelongsTo(() => Convocation)
  convocation: Convocation;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
