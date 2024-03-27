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
import { UserSTOCK } from './users.schema';
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

  @ManyToMany(() => Hotel, (hotel) => hotel.departments)
  @JoinTable()
  hotels: Hotel[];

  @Field(() => UserSTOCK, { nullable: true })
  @ManyToOne(() => UserSTOCK, (user) => user.departements, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: UserSTOCK;

  @Field(() => [Employee], { nullable: true })
  @OneToMany(() => Employee, (emp) => emp.departement, {
    cascade: true,
    eager: true,
  })
  employee: Employee[];
}
