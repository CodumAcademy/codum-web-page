import { Table, Column, Model, CreatedAt, HasMany, UpdatedAt, AllowNull } from 'sequelize-typescript';
import ConvocationRequirement from "../convocation-requirement";
import ConvocationUser from "../convocation-user";

@Table({
  tableName: "Convocations"
})
export default class Convocation extends Model<Convocation> {
  @AllowNull(false)
  @Column
  description: string;

  @AllowNull(false)
  @Column
  requirements: string;

  @AllowNull(false)
  @Column
  fromDate: Date;

  @AllowNull(false)
  @Column
  toDate: Date;

  @HasMany(() => ConvocationRequirement)
  convocationRequirements: ConvocationRequirement[];

  @HasMany(() => ConvocationUser)
  convocationUsers: ConvocationUser[];

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
