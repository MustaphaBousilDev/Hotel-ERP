import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from './users.mysql.entity';
import { Room } from './rooms.mysql.entity';
import { Hotel } from './hotel.mysql.entity';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Reservation extends AbstractEntity<Reservation> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  timestamp: Date;

  @Column()
  @Field() // for graph
  startDate: Date;

  @Column()
  @Field() // for graph
  endDate: Date;

  @Column()
  @Field() // for graph
  invoiceId: string;

  @ManyToOne(() => User, (user) => user.reservation, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Room, (room) => room.reservation, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  room: Room;

  @ManyToOne(() => Hotel, (hotel) => hotel.reservation, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  hotel: Hotel;
}
