import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Organization } from './organization.schema';
import { User } from './users.schema';
import { Departement } from './departement.schema';
import { ProductDetails } from './product.details.schema';
import { Category } from './categories.schema';
@Entity()
@ObjectType() // for add it in schema qraphql
export class Hotel extends AbstractEntity<Hotel> {
  @Column()
  //i am not using type in field because nestjs and graphql pick up on the type of these properties and will use it
  @Field() // for graph
  name: string;

  @Column()
  @Field() // for graph
  image: string;

  @ManyToOne(() => Organization, (organization) => organization.hotel, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  organization: Organization;

  @ManyToOne(() => User, (user) => user.hotel, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @ManyToMany(() => Departement, (departments) => departments.hotels)
  @JoinTable()
  departments: Departement[];

  @ManyToMany(() => Category, (category) => category.hotels)
  @JoinTable()
  categories: Category[];

  @OneToMany(() => ProductDetails, (product) => product.hotel, {
    cascade: true,
    eager: true,
  })
  products: ProductDetails[];
}
