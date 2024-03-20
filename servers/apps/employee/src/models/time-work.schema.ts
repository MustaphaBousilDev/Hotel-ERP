import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Employee } from './employee.schema';
import { User } from './users.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class TimeWork extends AbstractEntity<TimeWork> {
  @Column({ nullable: true })
  @Field() // for graph
  name: string;

  @Column({ nullable: true })
  @Field() // for graph
  status: boolean;

  @OneToMany(() => Employee, (employee) => employee.timeWork, {
    cascade: true,
    eager: true,
  })
  employee: Employee[];

  @ManyToOne(() => User, (user) => user.timeWork, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;
}
