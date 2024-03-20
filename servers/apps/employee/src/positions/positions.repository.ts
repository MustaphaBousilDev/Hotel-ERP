import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
//import { TimeWork } from '../models/time-work.schema';
import { User } from '../models/users.schema';
import { Position } from '../models/position.schema';

@Injectable()
export class PositionRepositorymySQL extends AbstractRepositorymySQL<Position> {
  protected readonly logger = new Logger(PositionRepositorymySQL.name);

  constructor(
    @InjectRepository(Position)
    PositionRepository: Repository<Position>,
    entityManager: EntityManager,
  ) {
    super(PositionRepository, entityManager);
  }
}

@Injectable()
export class UserRepositorymySQL extends AbstractRepositorymySQL<User> {
  protected readonly logger = new Logger(UserRepositorymySQL.name);

  constructor(
    @InjectRepository(User)
    UserRepository: Repository<User>,
    entityManager: EntityManager,
  ) {
    super(UserRepository, entityManager);
  }
}
