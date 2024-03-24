import { Module } from '@nestjs/common';
import { SubcategoririesService } from './subcategoriries.service';
import { SubcategoririesResolver } from './subcategoriries.resolver';
import { DatabaseModulemySQL } from '@app/shared';
import { Category, Product, SubCategory, User } from '../../models';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import {
  CategoryRepositorymySQL,
  SubCategoryRepositorymySQL,
  UserRepositorymySQL,
} from './subcategories.repository';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([User, Category, SubCategory, Product]),
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [
    SubcategoririesResolver,
    SubcategoririesService,
    SubCategoryRepositorymySQL,
    CategoryRepositorymySQL,
    UserRepositorymySQL,
  ],
})
export class SubcategoririesModule {}
