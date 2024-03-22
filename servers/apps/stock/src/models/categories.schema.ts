import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from './users.schema';
@Entity()
@ObjectType() // for add it in schema qraphql
export class Category extends AbstractEntity<Category> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name: string;

  @Column()
  @Field()
  status: boolean;

  @Column()
  @Field()
  product: string;

  @Column()
  @Field() // for graph
  image: string;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.category, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;
}
