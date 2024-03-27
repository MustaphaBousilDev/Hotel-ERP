import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Departement } from './departement.schema';
import { UserSTOCK } from './users.schema';
import { ProductDetails } from './product.details.schema';
// import { Departement } from './departement.schema';

@Entity()
@ObjectType() // for add it in schema qraphql
export class Employee extends AbstractEntity<Employee> {
  @Column()
  @Field() // for graph
  name: string;

  @Column()
  @Field() // for graph
  image: string;

  @ManyToOne(() => Departement, (departement) => departement.employee, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  departement: Departement;

  @OneToMany(() => ProductDetails, (product) => product.employee, {
    cascade: true,
    eager: true,
  })
  products: ProductDetails[];

  @ManyToOne(() => UserSTOCK, (user) => user.employee, {
    nullable: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: UserSTOCK;
}
