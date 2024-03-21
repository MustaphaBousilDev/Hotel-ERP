import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType() // for add it in schema qraphql
export class StockMovement extends AbstractEntity<StockMovement> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field({ nullable: true }) // for graph
  product_id: string;

  @Column()
  @Field()
  FromLocationID: number;

  @Column()
  @Field()
  ToLocationID: number;

  @Column()
  @Field()
  Quantity: number;

  @Column()
  @Field()
  MovementDate: Date;
}
