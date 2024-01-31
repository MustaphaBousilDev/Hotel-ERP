import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';
import { Employee } from './employee.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Position extends AbstractEntity<Position> {
  @Column()
  @Field() // for graph
  name: string;

  @Column()
  @Field() // for graph
  status: boolean;

  @Column()
  @Field() // for graph
  user_id: number;

  @OneToMany(() => Employee, (employee) => employee.position, {
    cascade: true,
    eager: true,
  })
  employee: Employee[];
}
