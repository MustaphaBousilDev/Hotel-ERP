import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { User } from './users.schema';
import { Product } from './products.schema';
@Entity()
@ObjectType() // for add it in schema qraphql
export class Brand extends AbstractEntity<Brand> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name: string;

  @Column()
  @Field()
  status: boolean;

  @Column()
  @Field() // for graph
  image: string;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.brand, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @OneToMany(() => Product, (product) => product.brand, {
    cascade: true,
    eager: true,
  })
  products: Product[];
}
