import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Departement } from './departement.entity';
import { TasksAttach } from './tasks-attachement.entity';
import { Task_History } from './task-history.entity';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Employee extends AbstractEntity<Employee> {
  @Column()
  @Field() // for graph
  firstName: string;

  @Column()
  @Field() // for graph
  lastName: string;

  @Column()
  @Field() // for graph
  superVisorID: string;

  @Column()
  @Field() // for graph
  isActivate: boolean;

  @Column()
  @Field() // for graph
  image: string;

  @ManyToOne(() => Departement, (departement) => departement.employee, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  departement: Departement;

  @Field(() => [TasksAttach], { nullable: true })
  @OneToMany(() => TasksAttach, (tasksAttach) => tasksAttach.employee, {
    nullable: true,
  })
  tasksAttach: TasksAttach[];

  @Field(() => [Task_History], { nullable: true })
  @OneToMany(() => Task_History, (tasksHistory) => tasksHistory.employee, {
    nullable: true,
  })
  tasks_history: Task_History[];
}
