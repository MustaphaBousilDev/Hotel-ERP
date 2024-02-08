import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Reservation } from './reservation.mysql.entity';

@Entity()
@ObjectType()
export class User extends AbstractEntity<User> {
  @Column()
  @Field()
  email: string;

  @Column()
  // i dont want to add Field into password , because password is sensitive data
  password: string;

  @OneToMany(() => Reservation, (reservation) => reservation.user, {
    cascade: true,
    eager: true,
  })
  reservation: Reservation[];
}
