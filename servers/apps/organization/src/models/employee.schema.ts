import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
// import { Departement } from './departement.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Employee extends AbstractEntity<Employee> {
  @Column()
  @Field() // for graph
  name: string;

  @Column()
  @Field() // for graph
  image: string;

  @Column()
  @Field() // for graph
  departement_id: string;
}
