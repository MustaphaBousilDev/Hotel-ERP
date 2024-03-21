import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubcategoririesService } from './subcategoriries.service';
import { Subcategoriry } from './entities/subcategoriry.entity';
import { CreateSubcategoriryInput } from './dto/create-subcategoriry.input';
import { UpdateSubcategoriryInput } from './dto/update-subcategoriry.input';

@Resolver(() => Subcategoriry)
export class SubcategoririesResolver {
  constructor(private readonly subcategoririesService: SubcategoririesService) {}

  @Mutation(() => Subcategoriry)
  createSubcategoriry(@Args('createSubcategoriryInput') createSubcategoriryInput: CreateSubcategoriryInput) {
    return this.subcategoririesService.create(createSubcategoriryInput);
  }

  @Query(() => [Subcategoriry], { name: 'subcategoriries' })
  findAll() {
    return this.subcategoririesService.findAll();
  }

  @Query(() => Subcategoriry, { name: 'subcategoriry' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subcategoririesService.findOne(id);
  }

  @Mutation(() => Subcategoriry)
  updateSubcategoriry(@Args('updateSubcategoriryInput') updateSubcategoriryInput: UpdateSubcategoriryInput) {
    return this.subcategoririesService.update(updateSubcategoriryInput.id, updateSubcategoriryInput);
  }

  @Mutation(() => Subcategoriry)
  removeSubcategoriry(@Args('id', { type: () => Int }) id: number) {
    return this.subcategoririesService.remove(id);
  }
}
