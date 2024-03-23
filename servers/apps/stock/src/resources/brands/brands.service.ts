import { Injectable } from '@nestjs/common';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { BrandRepositorymySQL, UserRepositorySQL } from './brands.repository';

@Injectable()
export class BrandsService {
  constructor(
    private readonly userRepository: UserRepositorySQL,
    private readonly brandRepository: BrandRepositorymySQL,
  ) {}
  create(createBrandInput: CreateBrandInput) {
    return 'This action adds a new brand';
  }

  findAll() {
    return `This action returns all brands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandInput: UpdateBrandInput) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
