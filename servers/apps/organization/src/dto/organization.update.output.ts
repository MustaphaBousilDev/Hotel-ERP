import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';

@ObjectType() // for add it in schema qraphql
export class OrganizationUpdateOutput {
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name?: string;

  @Field() // for graph
  phone1?: string;

  @Field() // for graph
  phone2?: string;

  @Field() // for graph
  email?: string;

  @Field() // for graph
  website?: string;

  @Field() // for graph
  description?: string;

  @Field() // for graph
  logo?: string;
}
