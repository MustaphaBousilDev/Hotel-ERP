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
} from './models';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { BrandsModule } from './resources/brands/brands.module';
import { CategoriesModule } from './resources/categories/categories.module';
import { SubcategoririesModule } from './resources/subcategoriries/subcategoriries.module';
import { SuppliersModule } from './resources/suppliers/suppliers.module';
import { TagsModule } from './resources/tags/tags.module';

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
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LoggerModule,
    BrandsModule,
    CategoriesModule,
    SubcategoririesModule,
    SuppliersModule,
    TagsModule,
  ],
  controllers: [],
  providers: [],
})
export class StockModule {}
