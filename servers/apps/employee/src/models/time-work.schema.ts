import { AbstractEntity } from '@app/shared';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Employee } from './employee.schema';
import { User } from './users.schema';

export enum TIME_WORK {
  MORNING = '06:00->14:00',
  AFTER_NOON = '14:00->22:00',
  NIGHT = '22:00->06:00',
}

registerEnumType(TIME_WORK, {
  name: 'TIME_WORK',
});

@Entity()
@ObjectType() // for add it in schema qraphql
export class TimeWork extends AbstractEntity<TimeWork> {
  @Column({
    nullable: true,
    type: 'enum',
    enum: TIME_WORK,
    default: TIME_WORK.MORNING,
  })
  @Field(() => TIME_WORK, { nullable: true }) // for graph
  name: TIME_WORK;

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