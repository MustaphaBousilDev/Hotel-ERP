import { AbstractEntity } from '@app/shared';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Wifi extends AbstractEntity<Wifi> {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
