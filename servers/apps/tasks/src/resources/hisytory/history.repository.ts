import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Tasks } from '../../models/tasks.entity';
import { Employee } from '../../models/employee.entity';
import { Task_History } from '../../models/task-history.entity';

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
export class TaskHistoryRepositorymySQL extends AbstractRepositorymySQL<Task_History> {
  protected readonly logger = new Logger(TaskHistoryRepositorymySQL.name);

  constructor(
    @InjectRepository(Task_History)
    TaskHistoryRepository: Repository<Task_History>,
    entityManager: EntityManager,
  ) {
    super(TaskHistoryRepository, entityManager);
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
