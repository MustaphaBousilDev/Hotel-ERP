import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { User } from '../../models/users.mysql.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UserRepositorySQLForRoom extends AbstractRepositorymySQL<User> {
  protected readonly logger = new Logger(UserRepositorySQLForRoom.name);

  constructor(
    @InjectRepository(User)
    usersRepositorySQL: Repository<User>,
    entityManager: EntityManager,
  ) {
    super(usersRepositorySQL, entityManager);
  }
}
