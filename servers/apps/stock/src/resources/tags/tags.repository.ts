import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Tags, User } from '../../models';

@Injectable()
export class TagRepositorymySQL extends AbstractRepositorymySQL<Tags> {
  protected readonly logger = new Logger(TagRepositorymySQL.name);

  constructor(
    @InjectRepository(Tags)
    TagRepository: Repository<Tags>,
    entityManager: EntityManager,
  ) {
    super(TagRepository, entityManager);
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
