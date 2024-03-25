import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Organization } from './organization.entity';
import { User } from './users.repository';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Hotel extends AbstractEntity<Hotel> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name: string;

  @ManyToOne(() => Organization, (organization) => organization.hotel, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  organization: Organization;

  @Column()
  @Field() // for graph
  image: string;

  @ManyToOne(() => User, (user) => user.hotel, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  user: User;
}
