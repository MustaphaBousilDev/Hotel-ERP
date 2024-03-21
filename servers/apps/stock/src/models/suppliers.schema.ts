import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
@Entity()
@ObjectType() // for add it in schema qraphql
export class Suppliers extends AbstractEntity<Suppliers> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name: string;

  @Column()
  @Field()
  ContactInfo: string;

  @Column()
  @Field()
  user: string;
}
