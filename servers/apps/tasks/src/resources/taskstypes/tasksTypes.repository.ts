import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { TasksType } from '../../models/tasks-type.entity';
import { Departement } from '../../models/departement.entity';
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
@Injectable()
export class DepartementRepositorymySQL extends AbstractRepositorymySQL<Departement> {
  protected readonly logger = new Logger(DepartementRepositorymySQL.name);

  constructor(
    @InjectRepository(Departement)
    DepartementRepository: Repository<Departement>,
    entityManager: EntityManager,
  ) {
    super(DepartementRepository, entityManager);
  }
}
