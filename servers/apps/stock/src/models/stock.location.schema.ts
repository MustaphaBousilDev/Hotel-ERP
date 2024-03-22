import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { User } from './users.schema';
import { Product } from './products.schema';
import { StockMovement } from './stock.movment.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class StockLocation extends AbstractEntity<StockLocation> {
  @Column()
  @Field({ nullable: true }) // for graph
  location_Name: string;

  @ManyToOne(() => User, (user) => user.stockLocation, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @OneToMany(() => Product, (product) => product.location, {
    cascade: true,
    eager: true,
  })
  products: Product[];

  @OneToMany(
    () => StockMovement,
    (stockMovment) => stockMovment.FromLocationID,
    {
      cascade: true,
      eager: true,
    },
  )
  stockMovementStart: StockMovement[];

  @OneToMany(() => StockMovement, (stockMovment) => stockMovment.ToLocationID, {
    cascade: true,
    eager: true,
  })
  stockMovementEnd: StockMovement[];
}
