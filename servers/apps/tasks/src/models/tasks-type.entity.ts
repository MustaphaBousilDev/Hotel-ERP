import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';
import { Tasks } from './tasks.entity';

@ObjectType()
@Entity()
export class TasksType extends AbstractEntity<TasksType> {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => [Tasks], { nullable: true })
  @OneToMany(() => Tasks, (tasks) => tasks.taskType, {
    nullable: true,
  })
  tasks: Tasks[];
}
