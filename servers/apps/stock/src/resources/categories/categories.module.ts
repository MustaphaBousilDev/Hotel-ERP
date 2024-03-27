import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { DatabaseModulemySQL } from '@app/shared';
import { Category, Hotel, SubCategory, UserSTOCK } from '../../models';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import {
  CategoryRepositorymySQL,
  UserRepositorySQL,
} from './categories.repository';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([Category, UserSTOCK, SubCategory, Hotel]),
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [
    CategoriesResolver,
    CategoriesService,
    UserRepositorySQL,
    CategoryRepositorymySQL,
  ],
})
export class CategoriesModule {}
