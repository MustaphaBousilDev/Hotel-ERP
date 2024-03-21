import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User extends AbstractEntity<User> {
  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  departement: string;

  @Column()
  @Field()
  hotel: string;

  @Column()
  @Field()
  organization: string;

  @Column()
  @Field()
  product: string;

  @Column()
  @Field()
  brand: string;

  @Column()
  @Field()
  category: string;

  @Column()
  @Field()
  subcategory: string;

  @Column()
  @Field()
  employee: string;

  @Column()
  @Field()
  suplies: string;

  @Column()
  @Field()
  tags: string;
}
