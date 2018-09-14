import { Table, Column, Model, CreatedAt, Default, HasMany, UpdatedAt, AllowNull, BelongsTo, ForeignKey } from 'sequelize-typescript';
import User from "../user";
import Convocation from "../convocation";

@Table({
  tableName: "UserScheduleMeetings"
})
export default class UserScheduleMeeting extends Model<UserScheduleMeeting> {
  @Column
  date: Date;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @AllowNull(false)
  @ForeignKey(() => Convocation)
  @Column
  convocationId: number;

  @BelongsTo(() => Convocation)
  convocation: Convocation;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
