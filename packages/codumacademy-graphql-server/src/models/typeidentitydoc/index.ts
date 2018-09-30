import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import User from "../user";

@Table({
  tableName: "TypeIdentityDocs"
})
export default class TypeIdentityDoc extends Model<TypeIdentityDoc> {

  @Column
  slug: string;

  @Column
  name: string;

  @HasMany(() => User)
  users: User[];

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
