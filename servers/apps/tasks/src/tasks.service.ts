import { Injectable } from '@nestjs/common';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import {
  TasksRepositorymySQL,
  TasksTypeRepositorymySQL,
} from './tasks.repository';
import { TasksDtoInput } from './dto/tasks.dto';
import { Tasks } from './models/tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    private readonly tasksRepository: TasksRepositorymySQL,
    private readonly tasksTypeRepository: TasksTypeRepositorymySQL,
  ) {}

  async create(createTasksDto: TasksDtoInput, { _id: userId }: UserInfoDto) {
    const taskType = await this.tasksTypeRepository.findOne({
      _id: createTasksDto.taskType.id,
    });
    console.log('######service');
    console.log(taskType);
    const organization = new Tasks({
      name: createTasksDto.name,
      taskType: taskType,
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
