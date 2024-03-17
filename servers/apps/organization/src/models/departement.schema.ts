import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  /*ManyToOne*/
  OneToMany,
} from 'typeorm';
import { Hotel } from './hotel.schema';
import { Employee } from './employee.schema';
import { User } from './users.mysql.entity';

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

  @ManyToMany(() => Hotel, (hotel) => hotel.departments)
  @JoinTable()
  hotels: Hotel[];

  @ManyToOne(() => User, (user) => user.departement, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @OneToMany(() => Employee, (employee) => employee.departement, {
    cascade: true,
    eager: true,
  })
  employee: Employee[];
}
