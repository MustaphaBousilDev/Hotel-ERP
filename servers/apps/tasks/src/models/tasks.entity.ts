import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
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

enum TaskStatus {
  PENDING = 'pending',
  DOING = 'doing',
  DONE = 'done',
  CANCEL = 'cancel',
}

enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

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
  priority: TaskStatus;

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

  @OneToOne(() => TasksAttach)
  @JoinColumn()
  taskAttachement: TasksAttach;

  @Field(() => [Task_History], { nullable: true })
  @OneToMany(() => Task_History, (tasksHistory) => tasksHistory.task, {
    nullable: true,
  })
  tasks_history: Task_History[];
}
