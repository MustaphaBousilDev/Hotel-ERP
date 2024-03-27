import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Suppliers, UserSTOCK } from '../../models';

@Injectable()
export class SupplierRepositorymySQL extends AbstractRepositorymySQL<Suppliers> {
  protected readonly logger = new Logger(SupplierRepositorymySQL.name);

  constructor(
    @InjectRepository(Suppliers)
    SupplierRepository: Repository<Suppliers>,
    entityManager: EntityManager,
  ) {
    super(SupplierRepository, entityManager);
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
