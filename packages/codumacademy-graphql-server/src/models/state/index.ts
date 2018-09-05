import { Table, Column, Model, ForeignKey, HasMany, BelongsTo, AllowNull, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import Country from "../country"
import City from "../city"
import User from "../user"

@Table({
  tableName: "States"
})
export default class State extends Model<State> {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @ForeignKey(() => Country)
  @Column
  countryId: number;

  @BelongsTo(() => Country)
  country: Country;

  @HasMany(() => City)
  cities: City[]

  @HasMany(() => User)
  users: User[];

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
