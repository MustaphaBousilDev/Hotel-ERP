import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Hotel } from './hotel.entity';
import { User } from './users.repository';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Organization extends AbstractEntity<Organization> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name: string;

  @Column()
  @Field() // for graph
  logo: string;

  @OneToMany(() => Hotel, (hotel) => hotel.organization, {
    cascade: true,
    eager: true,
  })
  hotel: Hotel[];

  @ManyToOne(() => User, (user) => user.organization, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  user: User;
}
