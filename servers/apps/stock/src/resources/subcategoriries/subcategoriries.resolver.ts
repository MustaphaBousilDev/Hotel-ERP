import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubcategoririesService } from './subcategoriries.service';
import { Subcategoriry } from './entities/subcategoriry.entity';
import { CreateSubcategoriryInput } from './dto/create-subcategoriry.input';
import { UpdateSubcategoriryInput } from './dto/update-subcategoriry.input';
import { CurrentUser } from '@app/shared';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';

@Resolver(() => Subcategoriry)
export class SubcategoririesResolver {
  constructor(
    private readonly subcategoririesService: SubcategoririesService,
  ) {}

  @Mutation(() => Subcategoriry)
  createSubcategoriry(
    @Args('createSubcategoriryInput')
    createSubcategoriryInput: CreateSubcategoriryInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.subcategoririesService.create(createSubcategoriryInput, user);
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
  updateSubcategoriry(
    @Args('id') id: number,
    @Args('updateSubcategoriryInput')
    updateSubcategoriryInput: UpdateSubcategoriryInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.subcategoririesService.update(
      id,
      updateSubcategoriryInput,
      user,
    );
  }

  @Mutation(() => Subcategoriry)
  removeSubcategoriry(@Args('id', { type: () => Int }) id: number) {
    return this.subcategoririesService.remove(id);
  }
}
