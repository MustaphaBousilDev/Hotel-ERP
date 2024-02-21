import { Injectable } from '@nestjs/common';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import {
  EmployeeRepositorymySQL,
  TaskAttachementRepositorymySQL,
  TasksRepositorymySQL,
  TasksTypeRepositorymySQL,
} from './tasks.repository';
import { TasksDtoInput } from './dto/tasks.dto';
import { Tasks } from './models/tasks.entity';
import { Employee } from './models/employee.entity';
import { In } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    private readonly tasksRepository: TasksRepositorymySQL,
    private readonly tasksTypeRepository: TasksTypeRepositorymySQL,
    private readonly tasksAttachementRepository: TaskAttachementRepositorymySQL,
    private readonly employeeRepository: EmployeeRepositorymySQL,
  ) {}

  async create(createTasksDto: TasksDtoInput, { _id: userId }: UserInfoDto) {
    const taskType = await this.tasksTypeRepository.findOne({
      _id: createTasksDto.taskType.id,
    });
    const taskAttachement = await this.tasksAttachementRepository.findOne({
      _id: createTasksDto.taskAttachement.id,
    });
    const ids = [];
    ids[0] = createTasksDto.employees[0].id;
    ids[1] = createTasksDto.employees[1].id;
    console.log(ids);
    const employee = await this.employeeRepository.findMany({
      where: {
        _id: In(ids),
      },
    });
    console.log('############ employess ############');
    console.log(employee);
    console.log('######service');
    console.log(taskType);
    const organization = new Tasks({
      name: createTasksDto.name,
      description: createTasksDto.description,
      status: createTasksDto.status,
      priority: createTasksDto.priority,
      date: createTasksDto.date,
      time: createTasksDto.time,
      dueDate: createTasksDto.dueDate,
      taskType: taskType,
      taskAttachement: taskAttachement,
      employees: employee,
    });
    return this.tasksRepository.create(organization);
  }

  async findAll() {
    return this.tasksRepository.findOne({});
  }

  async findOne(_id: any) {
    return this.tasksRepository.findOne({ _id });
  }

  async update(_id: any, updateOrganization: TasksDtoInput) {
    // return this.tasksRepository.findOneAndUpdate(
    //   { _id },
    //   updateOrganization,
    // );
  }

  async remove(_id: any) {
    console.log('############# coming to here');
    console.log(_id);
    await this.tasksRepository.findOneAndDelete({ _id });
    return { message: 'Success Delete Organization' };
  }
}
