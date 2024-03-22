import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from './users.schema';
@Entity()
@ObjectType() // for add it in schema qraphql
export class Tags extends AbstractEntity<Tags> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name: string;

  @ManyToOne(() => User, (user) => user.tags, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;
}
