import { Injectable } from '@nestjs/common';
import { CreateSubcategoriryInput } from './dto/create-subcategoriry.input';
import { UpdateSubcategoriryInput } from './dto/update-subcategoriry.input';

@Injectable()
export class SubcategoririesService {
  create(createSubcategoriryInput: CreateSubcategoriryInput) {
    return 'This action adds a new subcategoriry';
  }

  findAll() {
    return `This action returns all subcategoriries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subcategoriry`;
  }

  update(id: number, updateSubcategoriryInput: UpdateSubcategoriryInput) {
    return `This action updates a #${id} subcategoriry`;
  }

  remove(id: number) {
    return `This action removes a #${id} subcategoriry`;
  }
}
