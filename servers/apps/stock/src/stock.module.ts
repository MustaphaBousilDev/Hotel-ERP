import { Module } from '@nestjs/common';
import { DatabaseModulemySQL, LoggerModule } from '@app/shared';
import {
  Category,
  Departement,
  Employee,
  Hotel,
  Organization,
  Product,
  ProductDetails,
  ProductImage,
  StockLocation,
  StockMovement,
  StockTransaction,
  SubCategory,
  Suppliers,
  Tags,
  UserSTOCK,
} from './models';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { BrandsModule } from './resources/brands/brands.module';
import { CategoriesModule } from './resources/categories/categories.module';
import { SubcategoririesModule } from './resources/subcategoriries/subcategoriries.module';
import { SuppliersModule } from './resources/suppliers/suppliers.module';
import { TagsModule } from './resources/tags/tags.module';
import { ProductsModule } from './resources/products/products.module';
import { OrganizationController } from './stock.controller';
import { UserRepositorySQL } from './resources/users/users.repository';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([
      Category,
      SubCategory,
      Departement,
      Employee,
      Hotel,
      Organization,
      Product,
      ProductDetails,
      ProductImage,
      StockLocation,
      StockMovement,
      StockTransaction,
      SubCategory,
      Suppliers,
      Tags,
      UserSTOCK,
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LoggerModule,
    ProductsModule,
    BrandsModule,
    CategoriesModule,
    SubcategoririesModule,
    SuppliersModule,
    TagsModule,
  ],
  controllers: [OrganizationController],
  providers: [UserRepositorySQL],
})
export class StockModule {}
