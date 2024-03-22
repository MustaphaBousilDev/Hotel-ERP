import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './users.schema';
import { Employee } from './employe.responsable.schema';
import { Hotel } from './hotel.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Departement extends AbstractEntity<Departement> {
  @Column()
  @Field() // for graph
  name: string;

  @Column()
  @Field() // for graph
  description: string;

  @Column({ default: false })
  @Field() // for graph
  status: boolean;

  @Column()
  @Field() // for graph
  image: string;

  @ManyToMany(() => Hotel, (hotel) => hotel.departement)
  @JoinTable()
  hotels: Hotel[];

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.departements, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @Field(() => [Employee], { nullable: true })
  @OneToMany(() => Employee, (emp) => emp.departement, {
    cascade: true,
    eager: true,
  })
  employee: Employee[];
}
