import { Injectable } from '@nestjs/common';
import { CreateAttachementInput } from './dto/create-attachement.input';
import { UpdateAttachementInput } from './dto/update-attachement.input';

@Injectable()
export class AttachementService {
  create(createAttachementInput: CreateAttachementInput) {
    return 'This action adds a new attachement';
  }

  findAll() {
    return `This action returns all attachement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attachement`;
  }

  update(id: number, updateAttachementInput: UpdateAttachementInput) {
    return `This action updates a #${id} attachement`;
  }

  remove(id: number) {
    return `This action removes a #${id} attachement`;
  }
}
