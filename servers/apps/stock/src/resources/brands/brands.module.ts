import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsResolver } from './brands.resolver';
import { DatabaseModulemySQL } from '@app/shared';
import { Brand, Product, UserSTOCK } from '../../models';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import { BrandRepositorymySQL, UserRepositorySQL } from './brands.repository';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([UserSTOCK, Brand, Product]),
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [
    BrandsResolver,
    BrandsService,
    UserRepositorySQL,
    BrandRepositorymySQL,
  ],
})
export class BrandsModule {}
