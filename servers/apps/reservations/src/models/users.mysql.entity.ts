import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Reservation } from './reservation.mysql.entity';

@Entity()
@ObjectType()
export class User extends AbstractEntity<User> {
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
  reservation: Reservation[] = null;
}
