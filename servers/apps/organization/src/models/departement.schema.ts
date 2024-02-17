import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
// import { Hotel } from './hotel.schema';
// import { Employee } from './employee.schema';

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

  @Column()
  @Field() // for graph
  hotel_id: number;

  // @ManyToMany(() => Hotel, (hotel) => hotel.departments)
  // @JoinTable()
  // hotels: Hotel[];

  @Column({ default: null })
  @Field() // for graph
  user_id: number;

  // @OneToMany(() => Employee, (employee) => employee.departement, {
  //   cascade: true,
  //   eager: true,
  // })
  // employee: Employee[];
}
