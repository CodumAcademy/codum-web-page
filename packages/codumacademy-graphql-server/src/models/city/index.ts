import { Table, Column, Model, HasMany, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import State from "../state"
import User from "../user"

@Table({
  tableName: "Cities"
})
export default class City extends Model<City> {

  @Column
  name: string;

  @ForeignKey(() => State)
  @Column
  stateId: number;

  @BelongsTo(() => State)
  state: State;

  @HasMany(() => User)
  users: User[];


  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
