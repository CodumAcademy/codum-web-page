import { Table, Column, Model, CreatedAt, HasMany, UpdatedAt, AllowNull } from 'sequelize-typescript'
import State from "../state"
import User from "../user"

@Table({
  tableName: "Countries"
})
export default class Country extends Model<Country> {
  @AllowNull(false)
  @Column
  sortname: string;

  @AllowNull(false)
  @Column
  name: string;

  @HasMany(() => State)
  states: State[];

  @HasMany(() => User)
  users: User[];

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
