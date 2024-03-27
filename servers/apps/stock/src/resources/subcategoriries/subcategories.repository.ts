import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Category, SubCategory, UserSTOCK } from '../../models';
@Injectable()
export class SubCategoryRepositorymySQL extends AbstractRepositorymySQL<SubCategory> {
  protected readonly logger = new Logger(SubCategoryRepositorymySQL.name);

  constructor(
    @InjectRepository(SubCategory)
    SubCategoryRepository: Repository<SubCategory>,
    entityManager: EntityManager,
  ) {
    super(SubCategoryRepository, entityManager);
  }
}

@Injectable()
export class UserRepositorymySQL extends AbstractRepositorymySQL<UserSTOCK> {
  protected readonly logger = new Logger(UserRepositorymySQL.name);

  constructor(
    @InjectRepository(UserSTOCK)
    UserRepository: Repository<UserSTOCK>,
    entityManager: EntityManager,
  ) {
    super(UserRepository, entityManager);
  }
}

@Injectable()
export class CategoryRepositorymySQL extends AbstractRepositorymySQL<Category> {
  protected readonly logger = new Logger(CategoryRepositorymySQL.name);

  constructor(
    @InjectRepository(Category)
    CategoryRepository: Repository<Category>,
    entityManager: EntityManager,
  ) {
    super(CategoryRepository, entityManager);
  }
}
