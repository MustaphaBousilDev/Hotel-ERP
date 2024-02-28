import { Injectable } from '@nestjs/common';
import {
  EmployeeRepositorymySQL,
  TasksAttachementRepositorymySQL,
} from './attachement.repository';
import { TaskAttachementInput } from '../../dto/task-attachement.dto';
import { TasksAttach } from '../../models/tasks-attachement.entity';

@Injectable()
export class AttachementService {
  constructor(
    private readonly taskAttachementRepository: TasksAttachementRepositorymySQL,
    private readonly employeeRepository: EmployeeRepositorymySQL,
  ) {}
  async create(createAttachementInput: TaskAttachementInput) {
    const employee = await this.employeeRepository.findOne({
      _id: createAttachementInput.employee.id,
    });
    const taskAttachement = new TasksAttach({
      name: createAttachementInput.name,
      file_name: createAttachementInput.file_name,
      file_url: createAttachementInput.file_url,
      employee: employee,
    });
    return this.taskAttachementRepository.create(taskAttachement);
  }

  async findAll() {
    return this.taskAttachementRepository.find({});
  }

  async findOne(_id: any) {
    return this.taskAttachementRepository.findOne({ _id });
  }
  // async update(
  //   _id: any,
  //   updateTasksDto: TaskTypeDtoUpdate,
  //   // { _id: userId }: UserInfoDto,
  // ) {
  //   const newObjUpdate = {};
  //   if (updateTasksDto.name) {
  //     newObjUpdate['name'] = updateTasksDto.name;
  //   }
  //   // Conditionally fetch and insert taskType if it's not null
  //   if (updateTasksDto.departement && updateTasksDto.departement.id) {
  //     const departement = await this.departementRepository.findOne({
  //       _id: updateTasksDto.departement.id,
  //     });
  //     if (departement) {
  //       newObjUpdate['departement'] = departement;
  //     }
  //   }
  //   return this.taskstypesRepository.findOneAndUpdate({ _id }, newObjUpdate);
  // }

  // async remove(_id: any) {
  //   console.log('############# coming to here');
  //   console.log(_id);
  //   await this.taskstypesRepository.findOneAndDelete({ _id });
  //   return { message: 'Success Delete TasksType' };
  // }
}
