import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { City } from './city.schema';
import { Organization } from './organization.schema';
import { Wifi } from './wifi.schema';
import { Room } from './rooms.schema';
import { Departement } from './departement.schema';
import { User } from './users.mysql.entity';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Hotel extends AbstractEntity<Hotel> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name: string;

  @Column()
  @Field() // for graph
  address: string;

  @Field(() => [Departement]) // for graph
  @ManyToMany(() => Departement, { cascade: true })
  @JoinTable()
  departments: Departement[];

  @Field(() => Organization, { nullable: true })
  @ManyToOne(() => Organization, (organization) => organization.hotel, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  organization: Organization;

  @Field(() => City, { nullable: true }) // for graph
  @ManyToOne(() => City, (city) => city.hotel, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  city: City;

  @Field(() => [Wifi], { nullable: true })
  @OneToMany(() => Wifi, (wifi) => wifi.hotel, {
    cascade: true,
    eager: true,
  })
  wifi: Wifi[];

  @Column()
  @Field() // for graph
  phone: string;

  @Column()
  @Field() // for graph
  email: string;

  @Column()
  @Field() // for graph
  description: string;

  @Column()
  @Field() // for graph
  image: string;

  @Column()
  @Field() // for graph
  latitude: string;

  @Column({ default: false })
  @Field() // for graph
  status: boolean;

  @Column()
  @Field() // for graph
  longitude: string;

  @Field(() => [Room]) // for graph
  @OneToMany(() => Room, (room) => room.hotel, {
    cascade: true,
    eager: true,
  })
  room: Room[];

  @ManyToOne(() => User, (user) => user.hotel, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;
}
