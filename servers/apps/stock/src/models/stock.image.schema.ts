import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinTable, OneToOne } from 'typeorm';
import { Product } from './products.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class ProductImage extends AbstractEntity<ProductImage> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field({ nullable: true }) // for graph
  file_name: string;

  @Column()
  @Field()
  file_url: string;

  @OneToOne(() => Product, { nullable: true })
  @JoinTable()
  product: Product;

  @Column()
  @Field()
  file_url_resize_img: string;
}
