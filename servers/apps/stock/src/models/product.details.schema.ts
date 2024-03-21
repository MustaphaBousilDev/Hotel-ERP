import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Product extends AbstractEntity<Product> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field({ nullable: true }) // for graph
  name: string;

  @Column()
  @Field({ nullable: true }) // for graph
  description: string;

  @Column()
  @Field({ nullable: true })
  subcategory: string;

  @Column()
  @Field({ nullable: true })
  quantity: string;

  @Column()
  @Field({ nullable: true })
  price: string;

  @Column()
  @Field()
  supplierID: string;

  @Column()
  @Field()
  user: string;

  @Column()
  @Field()
  tags: string;

  @Column()
  @Field()
  brands: string;

  @Column()
  @Field()
  status: boolean;

  @Column()
  @Field()
  hotel: string;
}
