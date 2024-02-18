import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Tasks } from './models/tasks.entity';
import { TasksType } from './models/tasks-type.entity';

@Injectable()
export class TasksRepositorymySQL extends AbstractRepositorymySQL<Tasks> {
  protected readonly logger = new Logger(TasksRepositorymySQL.name);

  constructor(
    @InjectRepository(Tasks)
    TasksRepository: Repository<Tasks>,
    entityManager: EntityManager,
  ) {
    super(TasksRepository, entityManager);
  }
}

@Injectable()
export class TasksTypeRepositorymySQL extends AbstractRepositorymySQL<TasksType> {
  protected readonly logger = new Logger(TasksTypeRepositorymySQL.name);

  constructor(
    @InjectRepository(TasksType)
    TasksTypeRepository: Repository<TasksType>,
    entityManager: EntityManager,
  ) {
    super(TasksTypeRepository, entityManager);
  }
}
