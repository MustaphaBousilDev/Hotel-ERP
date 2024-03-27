import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Category, UserSTOCK } from '../../models';

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

@Injectable()
export class UserRepositorySQL extends AbstractRepositorymySQL<UserSTOCK> {
  protected readonly logger = new Logger(UserRepositorySQL.name);

  constructor(
    @InjectRepository(UserSTOCK)
    UserRepositorymySQL: Repository<UserSTOCK>,
    entityManager: EntityManager,
  ) {
    super(UserRepositorymySQL, entityManager);
  }
}
