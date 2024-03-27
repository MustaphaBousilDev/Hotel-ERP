import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UserSTOCK } from './users.schema';
import { SubCategory } from './subcategories.schema';
import { Hotel } from './hotel.schema';
import { Brand } from './brands.schema';
import { Suppliers } from './suppliers.schema';
import { Tags } from './tags.schema';
import { StockLocation } from './stock.location.schema';
import { StockTransaction } from './stock.transaction.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Product extends AbstractEntity<Product> {
  @Column()
  @Field({ nullable: true }) // for graph
  name: string;

  @Column()
  @Field({ nullable: true }) // for graph
  description: string;

  @ManyToOne(() => UserSTOCK, (user) => user.product, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: UserSTOCK;

  @ManyToOne(() => SubCategory, (subCat) => subCat.products, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  subCategory: SubCategory;

  @Column()
  @Field({ nullable: true })
  quantity: number;

  @Column()
  @Field({ nullable: true })
  price: number;

  @ManyToOne(() => Suppliers, (supplier) => supplier.products, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  supplier: Suppliers;

  @ManyToMany(() => Tags)
  @JoinTable()
  tags: Tags[];

  @ManyToOne(() => Brand, (brand) => brand.products, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  brand: Brand;

  @Column()
  @Field()
  status: boolean;

  @ManyToOne(() => Hotel, (hotel) => hotel.products, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  hotel: Hotel;

  @ManyToOne(() => StockLocation, (stock) => stock.products, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  location: StockLocation;

  @OneToMany(
    () => StockTransaction,
    (stockTransaction) => stockTransaction.product,
    {
      cascade: true,
      eager: true,
      nullable: true,
    },
  )
  productTransaction: StockTransaction[];
}
