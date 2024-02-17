import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
// import { Hotel } from './hotel.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Room extends AbstractEntity<Room> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  roomNumber: number;

  @Column()
  @Field() // for graph
  type: string; // single, double, suite

  @Column()
  @Field()
  price: number;

  @Column()
  @Field()
  description: string;

  @Column({ default: false })
  @Field()
  isAvailable: boolean;

  @Column()
  @Field() // for graph
  hotel_id: number;

  @Column()
  @Field() // for graph
  image: string;

  @Column()
  @Field() // for graph
  user_id: number;
}
