import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { OrganizationEMP } from './organization.schema';
import { DepartementEMP } from './departement.schema';
import { HotelEMP } from './hotel.schema';
import { EmployeeEMP } from './employee.schema';
import { Position } from './position.schema';
import { TimeWork } from './time-work.schema';

@Entity()
@ObjectType()
export class UserEMP extends AbstractEntity<UserEMP> {
  @Column({ nullable: true })
  @Field()
  firstName: string;

  @Column({ nullable: true })
  @Field()
  lastName: string;

  @Column({ nullable: true })
  @Field()
  email: string;

  @Field(() => [EmployeeEMP], { nullable: true })
  @OneToMany(() => EmployeeEMP, (emp) => emp.user, {
    cascade: true,
    eager: true,
  })
  employees: EmployeeEMP[];

  @Field(() => [Position], { nullable: true })
  @OneToMany(() => Position, (position) => position.user, {
    cascade: true,
    eager: true,
  })
  position: Position[];

  @Field(() => [OrganizationEMP], { nullable: true })
  @OneToMany(() => OrganizationEMP, (organization) => organization.user, {
    cascade: true,
    eager: true,
  })
  organization: OrganizationEMP[];

  @Field(() => [TimeWork], { nullable: true })
  @OneToMany(() => TimeWork, (timeWork) => timeWork.user, {
    cascade: true,
    eager: true,
  })
  timeWork: TimeWork[];

  @Field(() => [DepartementEMP], { nullable: true })
  @OneToMany(() => DepartementEMP, (departement) => departement.user, {
    cascade: true,
    eager: true,
  })
  departement: DepartementEMP[];

  @Field(() => [HotelEMP], { nullable: true })
  @OneToMany(() => HotelEMP, (hotel) => hotel.user, {
    cascade: true,
    eager: true,
  })
  hotel: HotelEMP[];
}
