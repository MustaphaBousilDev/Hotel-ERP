import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Reservation extends AbstractEntity<Reservation> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  timestamp: Date;

  @Column()
  @Field() // for graph
  startDate: Date;

  @Column()
  @Field() // for graph
  endDate: Date;

  @Column()
  @Field() // for graph
  userId: number;

  @Column()
  @Field() // for graph
  invoiceId: string;
}
