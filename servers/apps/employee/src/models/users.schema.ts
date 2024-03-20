import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Organization } from './organization.schema';
import { Departement } from './departement.schema';
import { Hotel } from './hotel.schema';
import { Employee } from './employee.schema';
import { Position } from './position.schema';
import { TimeWork } from './time-work.schema';

@Entity()
@ObjectType()
export class User extends AbstractEntity<User> {
  @Column({ nullable: true })
  @Field()
  firstName: string;

  @Column({ nullable: true })
  @Field()
  lastName: string;

  @Column({ nullable: true })
  @Field()
  email: string;

  @Field(() => [Employee], { nullable: true })
  @OneToMany(() => Employee, (emp) => emp.user, {
    cascade: true,
    eager: true,
  })
  employees: Employee[];

  @Field(() => [Position], { nullable: true })
  @OneToMany(() => Position, (position) => position.user, {
    cascade: true,
    eager: true,
  })
  position: Position[];

  @Field(() => [Organization], { nullable: true })
  @OneToMany(() => Organization, (organization) => organization.user, {
    cascade: true,
    eager: true,
  })
  organization: Organization[];

  @Field(() => [TimeWork], { nullable: true })
  @OneToMany(() => TimeWork, (timeWork) => timeWork.user, {
    cascade: true,
    eager: true,
  })
  timeWork: TimeWork[];

  @Field(() => [Departement], { nullable: true })
  @OneToMany(() => Departement, (departement) => departement.user, {
    cascade: true,
    eager: true,
  })
  departement: Departement[];

  @Field(() => [Hotel], { nullable: true })
  @OneToMany(() => Hotel, (hotel) => hotel.user, {
    cascade: true,
    eager: true,
  })
  hotel: Hotel[];
}
