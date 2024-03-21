import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType() // for add it in schema qraphql
export class ProductDetails extends AbstractEntity<ProductDetails> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field({ nullable: true }) // for graph
  file_name: string;

  @Column()
  @Field()
  file_url: string;

  @Column()
  @Field()
  productId: string;

  @Column()
  @Field()
  file_url_resize_img: string;
}
