import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Hotel } from './hotel.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class City extends AbstractEntity<City> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name: string;

  @Column()
  @Field() // for graph
  user_id: number;

  @ManyToMany(() => Hotel)
  hotels: Hotel[];
}
