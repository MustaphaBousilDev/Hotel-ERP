import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { DatabaseModulemySQL } from '@app/shared';
import {
  Brand,
  Hotel,
  Product,
  ProductDetails,
  ProductImage,
  StockLocation,
  StockTransaction,
  SubCategory,
  Tags,
  User,
} from '../../models';
import { Supplier } from '../suppliers/entities/supplier.entity';
import {
  BrandRepositorySQL,
  HotelRepositorySQL,
  ProductRepositorymySQL,
  StockLocationRepositorySQL,
  SubCategoryRepositorySQL,
  SupplierRepositorySQL,
  TagsRepositorySQL,
  UserRepositorySQL,
} from './products.repository';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([
      User,
      Product,
      ProductImage,
      ProductDetails,
      SubCategory,
      Brand,
      StockLocation,
      StockTransaction,
      Hotel,
      Tags,
      Supplier,
    ]),
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [
    ProductsResolver,
    ProductsService,
    ProductRepositorymySQL,
    UserRepositorySQL,
    SubCategoryRepositorySQL,
    SupplierRepositorySQL,
    BrandRepositorySQL,
    HotelRepositorySQL,
    StockLocationRepositorySQL,
    TagsRepositorySQL,
  ],
})
export class ProductsModule {}
