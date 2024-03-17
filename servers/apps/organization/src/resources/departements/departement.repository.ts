import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Departement } from '../../models/departement.schema';
import { User } from '../../models/users.mysql.entity';

@Injectable()
export class DepartementRepositorySQL extends AbstractRepositorymySQL<Departement> {
  protected readonly logger = new Logger(DepartementRepositorySQL.name);

  constructor(
    @InjectRepository(Departement)
    DepartementRepository: Repository<Departement>,
    entityManager: EntityManager,
  ) {
    super(DepartementRepository, entityManager);
  }
}

@Injectable()
export class UserRepositorySQL extends AbstractRepositorymySQL<User> {
  protected readonly logger = new Logger(UserRepositorySQL.name);

  constructor(
    @InjectRepository(User)
    UserRepository: Repository<User>,
    entityManager: EntityManager,
  ) {
    super(UserRepository, entityManager);
  }
}
