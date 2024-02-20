import { Tasks } from './tasks.entity';
import { Employee } from './employee.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '@app/shared';

@ObjectType()
@Entity()
export class Task_History extends AbstractEntity<Task_History> {
  @Field(() => Date)
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  changeDate: Date;

  @Field(() => String)
  @Column()
  status: string;

  @Field(() => String)
  @Column()
  priority: string;

  // Define relationships
  @ManyToOne(() => Tasks, (task) => task.tasks_history)
  task: Tasks;

  @ManyToOne(() => Employee, (employee) => employee.tasks_history)
  employee: Employee;
}
