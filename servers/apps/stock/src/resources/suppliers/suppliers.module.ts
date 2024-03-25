import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersResolver } from './suppliers.resolver';
import {
  SupplierRepositorymySQL,
  UserRepositorySQL,
} from './supplier.repository';
import { DatabaseModulemySQL } from '@app/shared';
import { Product, Suppliers, User } from '../../models';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([User, Suppliers, Product]),
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [
    SuppliersResolver,
    SuppliersService,
    UserRepositorySQL,
    SupplierRepositorymySQL,
  ],
})
export class SuppliersModule {}
