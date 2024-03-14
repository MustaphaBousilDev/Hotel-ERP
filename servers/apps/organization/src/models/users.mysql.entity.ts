import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Wifi } from './wifi.schema';
import { Room } from './rooms.schema';
import { Organization } from './organization.schema';
import { City } from './city.schema';
import { Departement } from './departement.schema';
import { Hotel } from './hotel.schema';

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
  @OneToMany(() => Wifi, (wifi) => wifi.user, {
    cascade: true,
    eager: true,
  })
  wifi: Wifi[];

  @Field(() => [Room], { nullable: true })
  @OneToMany(() => Room, (room) => room.user, {
    cascade: true,
    eager: true,
  })
  room: Room[];

  @Field(() => [Organization], { nullable: true })
  @OneToMany(() => Organization, (organization) => organization.user, {
    cascade: true,
    eager: true,
  })
  organization: Organization[];

  @Field(() => [City], { nullable: true })
  @OneToMany(() => City, (city) => city.user, {
    cascade: true,
    eager: true,
  })
  city: City[];

  @Field(() => [Departement], { nullable: true })
  @OneToMany(() => Departement, (departement) => departement.user, {
    cascade: true,
    eager: true,
  })
  departement: Departement[];

  @Field(() => [Hotel], { nullable: true })
  @OneToMany(() => Hotel, (hotel) => hotel.user, {
    cascade: true,
    eager: true,
  })
  hotel: Hotel[];
}
