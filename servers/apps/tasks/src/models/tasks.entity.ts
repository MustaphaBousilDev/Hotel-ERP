import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { TasksType } from './tasks-type.entity';

@ObjectType()
@Entity()
export class Tasks extends AbstractEntity<Tasks> {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => TasksType, { nullable: true })
  @ManyToOne(() => TasksType, (tasktype) => tasktype.tasks)
  taskType: TasksType;
}
