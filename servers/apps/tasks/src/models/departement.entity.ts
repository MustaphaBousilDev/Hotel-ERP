import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Hotel } from './hotel.entity';
import { Employee } from './employee.entity';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Departement extends AbstractEntity<Departement> {
  @Column()
  @Field() // for graph
  name: string;

  @Column()
  @Field() // for graph
  image: string;

  @ManyToMany(() => Hotel)
  @JoinTable()
  hotels: Hotel[];

  @OneToMany(() => Employee, (employee) => employee.departement, {
    cascade: true,
    eager: true,
  })
  employee: Employee[];
}
