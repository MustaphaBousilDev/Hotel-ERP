import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Wifi } from './wifi.schema';

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

  @Field(() => [Wifi], { nullable: true })
  @OneToMany(() => Wifi, (wifi) => wifi.user_id, {
    cascade: true,
    eager: true,
  })
  wifi: Wifi[];
}
