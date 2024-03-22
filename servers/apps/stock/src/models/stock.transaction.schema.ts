import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Product } from './products.schema';
import { User } from './users.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class StockTransaction extends AbstractEntity<StockTransaction> {
  @Column()
  @Field()
  TransactionType: number; // enum('IN','OUT')

  @Column()
  @Field()
  Quantity: number;

  @Column()
  @Field()
  TransactionDate: number;

  @ManyToOne(() => Product, (product) => product.productTransaction, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  product: Product;

  @ManyToOne(() => User, (user) => user.stockTransaction, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;
}
