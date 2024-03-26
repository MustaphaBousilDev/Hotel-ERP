import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Reservation } from './reservation.mysql.entity';
import { Hotel } from './hotel.mysql.entity';
import { Organization } from './organization.mysql.entity';
import { Room } from './rooms.mysql.entity';

@Entity()
@ObjectType()
export class UserRES extends AbstractEntity<UserRES> {
  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @OneToMany(() => Reservation, (reservation) => reservation.user, {
    cascade: true,
    eager: true,
  })
  reservation: Reservation[];

  @OneToMany(() => Room, (room) => room.user, {
    cascade: true,
    eager: true,
  })
  room: Room[];

  @OneToMany(() => Hotel, (hotel) => hotel.user, {
    cascade: true,
    eager: true,
  })
  hotel: Hotel[];

  @OneToMany(() => Organization, (org) => org.user, {
    cascade: true,
    eager: true,
  })
  organization: Organization[];
}
