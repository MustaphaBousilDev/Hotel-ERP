import { AbstractEntity } from '@app/shared';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
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
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => TaskStatus)
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @Field(() => TaskPriority)
  @Column({
    type: 'enum',
    enum: TaskPriority,
    default: TaskPriority.LOW,
  })
  priority: TaskPriority;

  @Field(() => TasksType, { nullable: true })
  @ManyToOne(() => TasksType, (tasktype) => tasktype.tasks)
  taskType: TasksType;

  @Field(() => Date)
  @Column({ type: 'date' })
  date: Date;

  @Field(() => String)
  @Column({ type: 'time' })
  time: string;

  @Field(() => Date)
  @Column({ type: 'date' })
  dueDate: Date;

  @Field(() => [Employee], { nullable: true })
  @ManyToMany(() => Employee)
  @JoinTable()
  employees: Employee[];

  @Field(() => TasksAttach, { nullable: true })
  @OneToOne(() => TasksAttach)
  @JoinColumn()
  taskAttachement: TasksAttach;

  @Field(() => [Task_History], { nullable: true })
  @OneToMany(() => Task_History, (tasksHistory) => tasksHistory.task, {
    nullable: true,
  })
  tasks_history: Task_History[];
}
