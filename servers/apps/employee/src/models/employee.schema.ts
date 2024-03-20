import { AbstractEntity } from '@app/shared';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Departement } from './departement.schema';
import { Position } from './position.schema';
import { TimeWork } from './time-work.schema';
import { User } from './users.schema';

export enum Gender {
  HOMME = 'homme',
  FEMME = 'femme',
}

registerEnumType(Gender, {
  name: 'Gender', //GraphQL type name
});

@Entity()
@ObjectType() // for add it in schema qraphql
export class Employee extends AbstractEntity<Employee> {
  @Column({ nullable: true })
  @Field() // for graph
  firstName: string;

  @Column({ nullable: true })
  @Field() // for graph
  lastName: string;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.HOMME,
    nullable: true,
  })
  @Field(() => Gender, { nullable: true }) // for graph
  gender: string;

  @Column({ nullable: true })
  @Field() // for graph
  dateOfBirth: Date;

  @Column({ nullable: true })
  @Field() // for graph
  dateHired: Date;

  @Column({ nullable: true })
  @Field() // for graph
  contactNumber: string;

  @Column({ nullable: true })
  @Field() // for graph
  email: string;

  @Column({ nullable: true })
  @Field() // for graph
  address: string;

  @Column({ nullable: true })
  @Field() // for graph
  salary: number;

  @Column({ nullable: true })
  @Field() // for graph
  superVisorID: string;

  @Column({ nullable: true })
  @Field() // for graph
  isActivate: boolean;

  @Column({ nullable: true })
  @Field() // for graph
  image: string;

  @Field(() => Departement, { nullable: true })
  @ManyToOne(() => Departement, (departement) => departement.employee, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  departement: Departement;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.employees, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @Field(() => Position, { nullable: true })
  @ManyToOne(() => Position, (position) => position.employee, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  position: Position;

  @Field(() => TimeWork, { nullable: true })
  @ManyToOne(() => TimeWork, (organization) => organization.employee, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  timeWork: TimeWork;
}
