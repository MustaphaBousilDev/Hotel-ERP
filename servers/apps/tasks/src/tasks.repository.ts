import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Tasks } from './models/tasks.entity';
import { TasksType } from './models/tasks-type.entity';
import { Employee } from './models/employee.entity';
import { TasksAttach } from './models/tasks-attachement.entity';

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

@Injectable()
export class EmployeeRepositorymySQL extends AbstractRepositorymySQL<Employee> {
  protected readonly logger = new Logger(EmployeeRepositorymySQL.name);

  constructor(
    @InjectRepository(Employee)
    EmployeeRepository: Repository<Employee>,
    entityManager: EntityManager,
  ) {
    super(EmployeeRepository, entityManager);
  }
}

@Injectable()
export class TaskAttachementRepositorymySQL extends AbstractRepositorymySQL<TasksAttach> {
  protected readonly logger = new Logger(TaskAttachementRepositorymySQL.name);

  constructor(
    @InjectRepository(TasksAttach)
    TaskAttachementRepository: Repository<TasksAttach>,
    entityManager: EntityManager,
  ) {
    super(TaskAttachementRepository, entityManager);
  }
}
