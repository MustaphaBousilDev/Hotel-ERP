import { Injectable } from '@nestjs/common';
import {
  DepartementRepositorymySQL,
  EmployeeRepositorymySQL,
  PositionRepositorymySQL,
  UserRepositorymySQL,
  timeWorkRepositorymySQL,
} from './employee.repository';
import { EmployeeDtoInput } from './dto/employee.input.dto';
import { Employee } from './models/employee.schema';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { EmployeeDtoUpdate } from './dto/employee.update.dto';

@Injectable()
export class EmployeeService {
  constructor(
    private readonly employeeRepository: EmployeeRepositorymySQL,
    private readonly departementRepository: DepartementRepositorymySQL,
    private readonly userRepository: UserRepositorymySQL,
    private readonly positionRepository: PositionRepositorymySQL,
    private readonly timeWorkRepository: timeWorkRepositorymySQL,
  ) {}

  async create(
    createEmployeeDto: EmployeeDtoInput,
    { _id: userId }: UserInfoDto,
  ) {
    const {
      position: postionDTO,
      timeWork: timeWorkDTO,
      departement: departementDTO,
      ...EmployeDTO
    } = createEmployeeDto;
    console.log(postionDTO, timeWorkDTO, departementDTO);
    const departement = await this.departementRepository.findOne({
      _id: createEmployeeDto.departement.id,
    });
    const user = await this.userRepository.findOne({
      _id: userId,
    });
    const position = await this.positionRepository.findOne({
      _id: createEmployeeDto.position.id,
    });
    const timeWork = await this.timeWorkRepository.findOne({
      _id: createEmployeeDto.timeWork.id,
    });
    if (departement && user && position && timeWork) {
      const saveEmp = new Employee({
        ...EmployeDTO,
        user: user,
        position: position,
        timeWork: timeWork,
        departement: departement,
      });
      return this.employeeRepository.create(saveEmp);
    }
  }

  async findAll() {
    return this.employeeRepository.find({});
  }

  async findOne(_id: any) {
    return this.employeeRepository.findOne({ _id });
  }

  async update(
    _id: any,
    updateEmployeeDto: EmployeeDtoUpdate,
    { _id: userId }: UserInfoDto,
  ) {
    const { departement, position, timeWork, ...updateDTO } = updateEmployeeDto;
    console.log(departement);
    console.log(position);
    console.log(timeWork);
    const user = await this.userRepository.findOne({
      _id: userId,
    });
    updateDTO['user'] = user;
    // Conditionally fetch and insert taskType if it's not null
    if (updateEmployeeDto.departement && updateEmployeeDto.departement.id) {
      const departement = await this.departementRepository.findOne({
        _id: updateEmployeeDto.departement.id,
      });
      if (departement) {
        updateDTO['departement'] = departement;
      }
    }
    // Conditionally fetch and insert taskAttachement if it's not null
    if (updateEmployeeDto.position && updateEmployeeDto.position.id) {
      const position = await this.positionRepository.findOne({
        _id: updateEmployeeDto.position.id,
      });
      if (position) {
        updateDTO['position'] = position;
      }
    }
    // Conditionally fetch and insert employees if they're not null
    if (updateEmployeeDto.timeWork && updateEmployeeDto.timeWork.id) {
      const timeWork = await this.timeWorkRepository.findOne({
        _id: updateEmployeeDto.timeWork.id,
      });
      if (timeWork) {
        updateDTO['timeWork'] = timeWork;
      }
    }
    return this.employeeRepository.findOneAndUpdate({ _id }, updateDTO);
  }

  async remove(_id: any) {
    await this.employeeRepository.findOneAndDelete({ _id });
  }
}
