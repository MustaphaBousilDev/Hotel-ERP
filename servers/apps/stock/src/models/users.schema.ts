import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Departement } from './departement.schema';
import { Hotel } from './hotel.schema';
import { Organization } from './organization.schema';
import { Brand } from './brands.schema';
import { Category } from './categories.schema';
import { SubCategory } from './subcategories.schema';
import { Employee } from './employe.responsable.schema';
import { Suppliers } from './suppliers.schema';
import { Product } from './products.schema';
import { StockLocation } from './stock.location.schema';
import { StockMovement } from './stock.movment.schema';
import { StockTransaction } from './stock.transaction.schema';
import { Tags } from './tags.schema';

@Entity()
@ObjectType()
export class UserSTOCK extends AbstractEntity<UserSTOCK> {
  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Field(() => [Departement], { nullable: true })
  @OneToMany(() => Departement, (departement) => departement.user, {
    cascade: true,
    eager: true,
  })
  departements: Departement[];

  @Field(() => [Hotel], { nullable: true })
  @OneToMany(() => Hotel, (hotel) => hotel.user, {
    cascade: true,
    eager: true,
  })
  hotel: Hotel[];

  @Field(() => [Organization], { nullable: true })
  @OneToMany(() => Organization, (organization) => organization.user, {
    cascade: true,
    eager: true,
  })
  organization: Organization[];

  @Field(() => [Product], { nullable: true })
  @OneToMany(() => Product, (product) => product.user, {
    cascade: true,
    eager: true,
  })
  product: Product[];

  @Field(() => [Brand], { nullable: true })
  @OneToMany(() => Brand, (brand) => brand.user, {
    cascade: true,
    eager: true,
  })
  brand: Brand[];

  @Field(() => [Category], { nullable: true })
  @OneToMany(() => Category, (category) => category.user, {
    cascade: true,
    eager: true,
  })
  category: Category[];

  @Field(() => [SubCategory], { nullable: true })
  @OneToMany(() => SubCategory, (subcat) => subcat.user, {
    cascade: true,
    eager: true,
  })
  subcategory: SubCategory[];

  @Field(() => [Employee], { nullable: true })
  @OneToMany(() => Employee, (emp) => emp.user, {
    cascade: true,
    eager: true,
  })
  employee: Employee[];

  @Field(() => [Suppliers], { nullable: true })
  @OneToMany(() => Suppliers, (sup) => sup.user, {
    cascade: true,
    eager: true,
  })
  suplies: Suppliers[];

  @Field(() => [StockLocation], { nullable: true })
  @OneToMany(() => StockLocation, (stock) => stock.user, {
    cascade: true,
    eager: true,
  })
  stockLocation: StockLocation[];

  @Field(() => [StockMovement], { nullable: true })
  @OneToMany(() => StockMovement, (stock) => stock.user, {
    cascade: true,
    eager: true,
  })
  movmentStock: StockMovement[];

  @Field(() => [StockTransaction], { nullable: true })
  @OneToMany(() => StockTransaction, (stock) => stock.user, {
    cascade: true,
    eager: true,
  })
  stockTransaction: StockTransaction[];

  @Field(() => [Tags], { nullable: true })
  @OneToMany(() => Tags, (tags) => tags.user, {
    cascade: true,
    eager: true,
  })
  tags: Tags[];
}
