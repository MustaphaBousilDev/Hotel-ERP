import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';
import { Employee } from './employee.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class TimeWork extends AbstractEntity<TimeWork> {
  @Column()
  @Field() // for graph
  name: string;

  @Column()
  @Field() // for graph
  status: boolean;

  @OneToMany(() => Employee, (employee) => employee.timeWork, {
    cascade: true,
    eager: true,
  })
  employee: Employee[];
}
