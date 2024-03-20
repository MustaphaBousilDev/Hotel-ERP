import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Organization } from './organization.schema';
import { Departement } from './departement.schema';
import { User } from './users.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Hotel extends AbstractEntity<Hotel> {
  @Column({ nullable: true })
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name: string;

  @ManyToMany(() => Departement, (departments) => departments.hotels)
  @JoinTable()
  departments: Departement[];

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
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;
}
