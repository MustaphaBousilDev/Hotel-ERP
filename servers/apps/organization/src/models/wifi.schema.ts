import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
// import { Hotel } from './hotel.schema';
// import { User } from './users.mysql.entity';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Wifi extends AbstractEntity<Wifi> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name: string;

  @Column()
  @Field() // for graph
  ip: string;

  @Column()
  @Field() // for graph
  password: string;

  @Column()
  @Field() // for graph
  user_id: number;

  @Column()
  @Field() // for graph
  hotel_id: number;

  // @ManyToOne(() => Hotel, (hotel) => hotel.wifi, {
  //   orphanedRowAction: 'delete',
  //   onDelete: 'CASCADE',
  //   onUpdate: 'CASCADE',
  // })
  // hotel: Hotel;

  // @ManyToOne(() => User, (user) => .wifi, {
  //   orphanedRowAction: 'delete',
  //   onDelete: 'CASCADE',
  //   onUpdate: 'CASCADE',
  // })
  // hotel: Hotel;
}
