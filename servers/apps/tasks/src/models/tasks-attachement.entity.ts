import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Employee } from './employee.entity';

@ObjectType()
@Entity()
export class TasksAttach extends AbstractEntity<TasksAttach> {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  file_name: string;

  @Field(() => String)
  @Column()
  file_url: string;

  @Field(() => Employee, { nullable: true })
  @ManyToOne(() => Employee, (emp) => emp.tasksAttach)
  employee: Employee;
}
