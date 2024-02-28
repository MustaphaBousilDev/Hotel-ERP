import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { TasksAttach } from '../../models/tasks-attachement.entity';
import { Employee } from '../../models/employee.entity';
@Injectable()
export class TasksAttachementRepositorymySQL extends AbstractRepositorymySQL<TasksAttach> {
  protected readonly logger = new Logger(TasksAttachementRepositorymySQL.name);

  constructor(
    @InjectRepository(TasksAttach)
    TasksAttachementRepository: Repository<TasksAttach>,
    entityManager: EntityManager,
  ) {
    super(TasksAttachementRepository, entityManager);
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
