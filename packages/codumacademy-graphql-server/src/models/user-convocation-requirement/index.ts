import { Table, Column, Model, CreatedAt, Default, HasMany, UpdatedAt, AllowNull, BelongsTo, ForeignKey } from 'sequelize-typescript';
import User from "../user";
import ConvocationRequirement from "../convocation-requirement";

@Table({
  tableName: "UserConvocationRequirements"
})
export default class UserConvocationRequirement extends Model<UserConvocationRequirement> {
  @Default(false)
  @Column
  completed: boolean;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @AllowNull(false)
  @ForeignKey(() => ConvocationRequirement)
  @Column
  convocationRequirementId: number;

  @BelongsTo(() => ConvocationRequirement)
  convocationRequirement: ConvocationRequirement;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
