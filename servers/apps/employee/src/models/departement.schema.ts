import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Hotel } from './hotel.schema';
import { Employee } from './employee.schema';
import { User } from './users.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Departement extends AbstractEntity<Departement> {
  @Column({ nullable: true })
  @Field() // for graph
  name: string;

  @Column({ nullable: true })
  @Field() // for graph
  image: string;

  @ManyToMany(() => Hotel, (hotel) => hotel.departments)
  @JoinTable()
  hotels: Hotel[];

  @OneToMany(() => Employee, (employee) => employee.departement, {
    cascade: true,
    eager: true,
  })
  employee: Employee[];

  @ManyToOne(() => User, (user) => user.departement, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;
}
