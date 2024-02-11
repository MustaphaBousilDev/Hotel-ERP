import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { Organization } from './models/organization.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

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
