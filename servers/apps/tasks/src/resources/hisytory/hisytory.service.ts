import { Injectable } from '@nestjs/common';
import { CreateHisytoryInput } from './dto/create-hisytory.input';
import { UpdateHisytoryInput } from './dto/update-hisytory.input';

@Injectable()
export class HisytoryService {
  create(createHisytoryInput: CreateHisytoryInput) {
    return 'This action adds a new hisytory';
  }

  findAll() {
    return `This action returns all hisytory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hisytory`;
  }

  update(id: number, updateHisytoryInput: UpdateHisytoryInput) {
    return `This action updates a #${id} hisytory`;
  }

  remove(id: number) {
    return `This action removes a #${id} hisytory`;
  }
}
