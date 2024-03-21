import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType() // for add it in schema qraphql
export class ProductDetails extends AbstractEntity<ProductDetails> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field({ nullable: true }) // for graph
  productID: string;

  @Column()
  @Field({ nullable: true }) // for graph
  regular_price: string;

  @Column()
  @Field({ nullable: true })
  price: string;

  @Column()
  @Field({ nullable: true })
  made: string;

  @Column()
  @Field({ nullable: true })
  code: string;
}
