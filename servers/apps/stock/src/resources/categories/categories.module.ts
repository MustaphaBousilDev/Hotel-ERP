import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { DatabaseModulemySQL } from '@app/shared';
import { Category, Hotel, SubCategory, User } from '../../models';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import {
  CategoryRepositorymySQL,
  UserRepositorySQL,
} from './categories.repository';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([Category, User, SubCategory, Hotel]),
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
