import { Injectable } from '@nestjs/common';
import { CreateTaskstypeInput } from './dto/create-taskstype.input';
import { UpdateTaskstypeInput } from './dto/update-taskstype.input';

@Injectable()
export class TaskstypesService {
  create(createTaskstypeInput: CreateTaskstypeInput) {
    return 'This action adds a new taskstype';
  }

  findAll() {
    return `This action returns all taskstypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskstype`;
  }

  update(id: number, updateTaskstypeInput: UpdateTaskstypeInput) {
    return `This action updates a #${id} taskstype`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskstype`;
  }
}
