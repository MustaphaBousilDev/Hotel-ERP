import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Hotel, UserSTOCK } from '../../models';

@Injectable()
export class HotelRepositorymySQL extends AbstractRepositorymySQL<Hotel> {
  protected readonly logger = new Logger(HotelRepositorymySQL.name);

  constructor(
    @InjectRepository(Hotel)
    HotelRepository: Repository<Hotel>,
    entityManager: EntityManager,
  ) {
    super(HotelRepository, entityManager);
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
