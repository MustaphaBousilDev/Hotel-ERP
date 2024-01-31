import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Departement } from './departement.schema';
import { Position } from './position.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Employee extends AbstractEntity<Employee> {
  @Column()
  @Field() // for graph
  firstName: string;

  @Column()
  @Field() // for graph
  lastName: string;

  @Column()
  @Field() // for graph
  gender: string;

  @Column()
  @Field() // for graph
  dateOfBirth: Date;

  @Column()
  @Field() // for graph
  dateHired: Date;

  @Column()
  @Field() // for graph
  contactNumber: string;

  @Column()
  @Field() // for graph
  email: string;

  @Column()
  @Field() // for graph
  address: string;

  @Column()
  @Field() // for graph
  salary: string;

  @Column()
  @Field() // for graph
  superVisorID: string;

  @Column()
  @Field() // for graph
  isActivate: boolean;

  @Column()
  @Field() // for graph
  image: string;

  @ManyToOne(() => Departement, (departement) => departement.employee, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  departement: Departement;

  @ManyToOne(() => Position, (position) => position.employee, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  position: Departement;
}
