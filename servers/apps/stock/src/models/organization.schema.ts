import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

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
  website: string;

  @Column()
  @Field({ nullable: true })
  description: string;

  @Column()
  @Field({ nullable: true })
  logo: string;

  @Column()
  @Field()
  user: string;

  @Column()
  @Field()
  hotel: string;
}
