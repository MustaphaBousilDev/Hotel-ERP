import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Product } from './products.schema';
import { UserSTOCK } from './users.schema';
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

  @OneToMany(() => Product, (product) => product.supplier, {
    cascade: true,
    eager: true,
  })
  products: Product[];

  @ManyToOne(() => UserSTOCK, (user) => user.suplies, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: UserSTOCK;
}
