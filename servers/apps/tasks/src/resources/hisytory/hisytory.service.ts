import { Injectable } from '@nestjs/common';
import {
  EmployeeRepositorymySQL,
  TaskHistoryRepositorymySQL,
  TasksRepositorymySQL,
} from './history.repository';
import { TasksHistoryDtoInput } from '../../dto/task-history.dto';
import { TasksHistoryUpdateDTO } from '../../dto/task-history-update.dto';
import { Task_History } from '../../models/task-history.entity';

@Injectable()
export class HisytoryService {
  constructor(
    private readonly hisytoryRepository: TaskHistoryRepositorymySQL,
    private readonly taskRepository: TasksRepositorymySQL,
    private readonly employeeRepository: EmployeeRepositorymySQL,
  ) {}
  async create(createTaskHistoryInput: TasksHistoryDtoInput) {
    const employee = await this.employeeRepository.findOne({
      _id: createTaskHistoryInput.employees.id,
    });
    const task = await this.taskRepository.findOne({
      _id: createTaskHistoryInput.task.id,
    });
    const taskHistory = new Task_History({
      ...createTaskHistoryInput,
      task: task,
      employee: employee,
    });
    return this.hisytoryRepository.create(taskHistory);
  }

  findAll() {
    return `This action returns all hisytory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hisytory`;
  }

  update(_id: any, updateTaskHistoryDto: TasksHistoryUpdateDTO) {
    return `This action updates a #${_id} hisytory`;
  }

  remove(id: number) {
    return `This action removes a #${id} hisytory`;
  }
}
