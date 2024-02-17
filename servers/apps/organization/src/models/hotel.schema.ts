import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  ManyToOne,
  // OneToMany,
} from 'typeorm';
import { City } from './city.schema';
import { Organization } from './organization.schema';
// import { Wifi } from './wifi.schema';
// import { Room } from './rooms.schema';
// import { Departement } from './departement.schema';

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

  @ManyToMany(() => City, { cascade: true })
  @JoinTable()
  cities: City[];

  // @ManyToMany(() => Departement, { cascade: true })
  // @JoinTable()
  // departments: Departement[];

  @ManyToOne(() => Organization, (organization) => organization.hotel, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  organization: Organization;

  // @Field(() => [Wifi], { nullable: true })
  // @OneToMany(() => Wifi, (wifi) => wifi.hotel, {
  //   cascade: true,
  //   eager: true,
  // })
  // wifi: Wifi[];

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

  @Column()
  @Field() // for graph
  longitude: string;

  @Column()
  @Field() // for graph
  user_id: number;

  // @OneToMany(() => Room, (room) => room.hotel, {
  //   cascade: true,
  //   eager: true,
  // })
  // room: Room[];
}
