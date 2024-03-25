import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Suppliers, User } from '../../models';

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
