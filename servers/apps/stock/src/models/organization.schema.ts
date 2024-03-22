import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { User } from './users.schema';
import { Hotel } from './hotel.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Organization extends AbstractEntity<Organization> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field({ nullable: true }) // for graph
  name: string;

  @Column()
  @Field({ nullable: true }) // for graph
  email: string;

  @Column()
  @Field({ nullable: true })
  logo: string;

  @ManyToOne(() => User, (user) => user.organization, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @OneToMany(() => Hotel, (hotel) => hotel.organization, {
    cascade: true,
    eager: true,
  })
  hotel: Hotel[];
}
