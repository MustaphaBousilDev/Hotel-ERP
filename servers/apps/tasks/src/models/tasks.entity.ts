import { AbstractEntity } from '@app/shared';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TasksType } from './tasks-type.entity';
import { Employee } from './employee.entity';
import { TasksAttach } from './tasks-attachement.entity';
import { Task_History } from './task-history.entity';

export enum TaskStatus {
  PENDING = 'pending',
  DOING = 'doing',
  DONE = 'done',
  CANCEL = 'cancel',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

registerEnumType(TaskStatus, {
  name: 'TaskStatus', // GraphQL type name
});

registerEnumType(TaskPriority, {
  name: 'TaskPriority', // GraphQL type name
});

@ObjectType()
@Entity()
export class Tasks extends AbstractEntity<Tasks> {
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field(() => TaskStatus, { nullable: true })
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
    nullable: true,
  })
  status: TaskStatus;

  @Field(() => TaskPriority, { nullable: true })
  @Column({
    type: 'enum',
    enum: TaskPriority,
    default: TaskPriority.LOW,
    nullable: true,
  })
  priority: TaskPriority;

  @Field(() => TasksType, { nullable: true })
  @ManyToOne(() => TasksType, (tasktype) => tasktype.tasks, {
    nullable: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  taskType: TasksType;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'date', nullable: true })
  date: Date;

  @Field(() => String, { nullable: true })
  @Column({ type: 'time', nullable: true })
  time: string;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'date', nullable: true })
  dueDate: Date;

  @Field(() => [Employee], { nullable: true })
  @ManyToMany(() => Employee, { nullable: true })
  @JoinTable()
  employees: Employee[];

  @Field(() => TasksAttach, { nullable: true })
  @ManyToOne(() => TasksAttach, (taskAttach) => taskAttach.tasks, {
    nullable: true,
  })
  taskAttachement: TasksAttach;

  @Field(() => [Task_History], { nullable: true })
  @OneToMany(() => Task_History, (tasksHistory) => tasksHistory.task, {
    nullable: true,
  })
  tasks_history: Task_History[];
}
