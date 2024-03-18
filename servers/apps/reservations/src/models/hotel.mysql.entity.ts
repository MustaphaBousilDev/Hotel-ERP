import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Room } from './rooms.mysql.entity';
import { Organization } from './organization.mysql.entity';
import { Reservation } from './reservation.mysql.entity';
@Entity()
@ObjectType() // for add it in schema qraphql
export class Hotel extends AbstractEntity<Hotel> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name: string;

  @Column()
  @Field() // for graph
  image: string;

  @OneToMany(() => Room, (room) => room.hotel, {
    cascade: true,
    eager: true,
  })
  room: Room[];

  @ManyToOne(() => Organization, (organization) => organization.hotel, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  organization: Organization;

  @OneToMany(() => Reservation, (reservation) => reservation.hotel, {
    cascade: true,
    eager: true,
  })
  reservation: Reservation[];
}
