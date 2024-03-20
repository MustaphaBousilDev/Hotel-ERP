import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { TimeWork } from '../models/time-work.schema';
import { User } from '../models/users.schema';

@Injectable()
export class TimeWorkRepositorymySQL extends AbstractRepositorymySQL<TimeWork> {
  protected readonly logger = new Logger(TimeWorkRepositorymySQL.name);

  constructor(
    @InjectRepository(TimeWork)
    TimeWorkRepository: Repository<TimeWork>,
    entityManager: EntityManager,
  ) {
    super(TimeWorkRepository, entityManager);
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
