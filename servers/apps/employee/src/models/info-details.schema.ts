import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType() // for add it in schema qraphql
export class InfoDetails extends AbstractEntity<InfoDetails> {
  @Column()
  @Field() // for graph
  salary: string;

  @Column()
  @Field() // for graph
  experience: number;

  @Column()
  @Field() // for graph
  employeID: number;

  @Column()
  @Field() // for graph
  phoneNumber: number;
}
