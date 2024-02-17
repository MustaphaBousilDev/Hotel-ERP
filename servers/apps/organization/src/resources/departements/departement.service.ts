import { Injectable } from '@nestjs/common';
import { DepartementRepositorySQL } from './departement.repository';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { CreateDepartementInput } from './dto/create-departement.input';
import { Departement } from '../../models/departement.schema';

@Injectable()
export class DepartementService {
  constructor(
    private readonly departementRepository: DepartementRepositorySQL,
  ) {}
  async create(
    createDepartementDto: CreateDepartementInput,
    { _id: user_id }: UserInfoDto,
  ) {
    const departement = new Departement({
      ...createDepartementDto,
      user_id: user_id,
    });
    return this.departementRepository.create(departement);
  }

  async findAll() {
    return this.departementRepository.find({});
  }

  async findOne(_id: any) {
    return this.departementRepository.findOne({ _id });
  }

  async update(
    _id: any,
    updateWifiDto: CreateDepartementInput,
    { _id: user_id }: UserInfoDto,
  ) {
    const update = {
      ...updateWifiDto,
      user_id,
    };
    return this.departementRepository.findOneAndUpdate({ _id }, update);
  }

  remove(_id: any) {
    this.departementRepository.findOneAndDelete({ _id });
  }
}
