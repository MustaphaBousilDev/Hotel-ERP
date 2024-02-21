import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Employee } from './employee.entity';
import { Tasks } from './tasks.entity';

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

  @Field(() => [Tasks], { nullable: true })
  @OneToMany(() => Tasks, (tasks) => tasks.taskAttachement, {
    nullable: true,
  })
  tasks: Tasks[];
}
