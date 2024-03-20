import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Employee } from './models/employee.schema';
import { Departement } from './models/departement.schema';
import { User } from './models/users.schema';
import { Position } from './models/position.schema';
import { TimeWork } from './models/time-work.schema';

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
export class timeWorkRepositorymySQL extends AbstractRepositorymySQL<TimeWork> {
  protected readonly logger = new Logger(timeWorkRepositorymySQL.name);

  constructor(
    @InjectRepository(TimeWork)
    timeWorkRepository: Repository<TimeWork>,
    entityManager: EntityManager,
  ) {
    super(timeWorkRepository, entityManager);
  }
}
