import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { Organization } from './models/organization.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { User } from './models/users.mysql.entity';

@Injectable()
export class OrganizationRepositorymySQL extends AbstractRepositorymySQL<Organization> {
  protected readonly logger = new Logger(OrganizationRepositorymySQL.name);

  constructor(
    @InjectRepository(Organization)
    ReservationsRepository: Repository<Organization>,
    entityManager: EntityManager,
  ) {
    super(ReservationsRepository, entityManager);
  }
}

@Injectable()
export class UserRepositorySQLOrg extends AbstractRepositorymySQL<User> {
  protected readonly logger = new Logger(UserRepositorySQLOrg.name);

  constructor(
    @InjectRepository(User)
    UserRepositorymySQL: Repository<User>,
    entityManager: EntityManager,
  ) {
    super(UserRepositorymySQL, entityManager);
  }
}
