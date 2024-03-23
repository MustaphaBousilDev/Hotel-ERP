import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Brand, User } from '../../models';

@Injectable()
export class BrandRepositorymySQL extends AbstractRepositorymySQL<Brand> {
  protected readonly logger = new Logger(BrandRepositorymySQL.name);

  constructor(
    @InjectRepository(Brand)
    BrandsRepository: Repository<Brand>,
    entityManager: EntityManager,
  ) {
    super(BrandsRepository, entityManager);
  }
}

@Injectable()
export class UserRepositorySQL extends AbstractRepositorymySQL<User> {
  protected readonly logger = new Logger(UserRepositorySQL.name);

  constructor(
    @InjectRepository(User)
    UserRepositorymySQL: Repository<User>,
    entityManager: EntityManager,
  ) {
    super(UserRepositorymySQL, entityManager);
  }
}
