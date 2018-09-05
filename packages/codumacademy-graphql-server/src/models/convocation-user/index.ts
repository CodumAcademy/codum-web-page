import { Table, Column, Model, ForeignKey, BelongsTo, CreatedAt, HasMany, UpdatedAt, AllowNull } from 'sequelize-typescript';
import User from "../user";
import Convocation from "../convocation";

@Table({
  tableName: "ConvocationUsers"
})
export default class ConvocationUser extends Model<ConvocationUser> {

  @AllowNull(false)
  @ForeignKey(() => Convocation)
  @Column
  convocationId: number;

  @BelongsTo(() => Convocation)
  convocation: Convocation;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
