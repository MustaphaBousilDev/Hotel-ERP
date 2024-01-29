import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Room } from './rooms.schema';
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

  @Column()
  @Field() // for graph
  image: string;

  @ManyToMany(() => Hotel, (hotel) => hotel.departments)
  @JoinTable()
  hotels: Hotel[];

  @Column()
  @Field() // for graph
  user_id: number;

  @OneToMany(() => Room, (room) => room.hotel, {
    cascade: true,
    eager: true,
  })
  room: Room[];
}
