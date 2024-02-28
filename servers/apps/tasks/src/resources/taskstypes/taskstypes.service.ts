import { Injectable } from '@nestjs/common';
import {
  DepartementRepositorymySQL,
  TasksTypeRepositorymySQL,
} from './tasksTypes.repository';
import { TasksTypeDtoInput } from '../../dto/tasks-type.dto';
import { TasksType } from '../../models/tasks-type.entity';

@Injectable()
export class TaskstypesService {
  constructor(
    private readonly taskstypesRepository: TasksTypeRepositorymySQL,
    private readonly departementRepository: DepartementRepositorymySQL,
  ) {}

  async create(createTaskstypeInput: TasksTypeDtoInput) {
    const departement = await this.departementRepository.findOne({
      _id: createTaskstypeInput.departement.id,
    });
    const tasksType = new TasksType({
      name: createTaskstypeInput.name,
      departement: departement,
    });
    return this.taskstypesRepository.create(tasksType);
  }

  async findAll() {
    return this.taskstypesRepository.find({});
  }
}
