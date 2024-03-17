import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Hotel } from '../../models/hotel.schema';
import { Organization } from '../../models/organization.schema';
import { City } from '../../models/city.schema';
import { User } from '../../models/users.mysql.entity';
import { Departement } from '../../models/departement.schema';

@Injectable()
export class HotelRepositorySQL extends AbstractRepositorymySQL<Hotel> {
  protected readonly logger = new Logger(HotelRepositorySQL.name);

  constructor(
    @InjectRepository(Hotel)
    HotelRepository: Repository<Hotel>,
    entityManager: EntityManager,
  ) {
    super(HotelRepository, entityManager);
  }
}

@Injectable()
export class OrganizationRepositorySQL extends AbstractRepositorymySQL<Organization> {
  protected readonly logger = new Logger(OrganizationRepositorySQL.name);

  constructor(
    @InjectRepository(Organization)
    OrganizationRepository: Repository<Organization>,
    entityManager: EntityManager,
  ) {
    super(OrganizationRepository, entityManager);
  }
}

@Injectable()
export class CityRepositorySQL extends AbstractRepositorymySQL<City> {
  protected readonly logger = new Logger(CityRepositorySQL.name);

  constructor(
    @InjectRepository(City)
    CityRepository: Repository<City>,
    entityManager: EntityManager,
  ) {
    super(CityRepository, entityManager);
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

@Injectable()
export class DepartementRepositorySQL extends AbstractRepositorymySQL<Departement> {
  protected readonly logger = new Logger(UserRepositorySQL.name);

  constructor(
    @InjectRepository(Departement)
    DepartementRepository: Repository<Departement>,
    entityManager: EntityManager,
  ) {
    super(DepartementRepository, entityManager);
  }
}
