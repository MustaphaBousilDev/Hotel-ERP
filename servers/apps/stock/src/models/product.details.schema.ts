import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToOne, OneToOne } from 'typeorm';
import { UserSTOCK } from './users.schema';
import { Employee } from './employe.responsable.schema';
import { Hotel } from './hotel.schema';
import { Product } from './products.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class ProductDetails extends AbstractEntity<ProductDetails> {
  @OneToOne(() => Product, { nullable: true })
  @JoinTable()
  product: Product;

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

  @ManyToOne(() => UserSTOCK, (user) => user.product, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: UserSTOCK;

  @ManyToOne(() => Employee, (emp) => emp.products, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  employee: Employee;

  @ManyToOne(() => Hotel, (hotel) => hotel.products, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  hotel: Hotel;
}
