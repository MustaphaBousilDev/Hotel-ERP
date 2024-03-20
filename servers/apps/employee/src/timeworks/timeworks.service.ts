import { Injectable } from '@nestjs/common';
import { CreateTimeworkInput } from './dto/create-timework.input';
import { UpdateTimeworkInput } from './dto/update-timework.input';

@Injectable()
export class TimeworksService {
  create(createTimeworkInput: CreateTimeworkInput) {
    return 'This action adds a new timework';
  }

  findAll() {
    return `This action returns all timeworks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timework`;
  }

  update(id: number, updateTimeworkInput: UpdateTimeworkInput) {
    return `This action updates a #${id} timework`;
  }

  remove(id: number) {
    return `This action removes a #${id} timework`;
  }
}
