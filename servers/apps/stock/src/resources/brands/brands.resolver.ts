import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BrandsService } from './brands.service';
import { Brand } from './entities/brand.entity';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { CurrentUser } from '@app/shared';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';

@Resolver(() => Brand)
export class BrandsResolver {
  constructor(private readonly brandsService: BrandsService) {}

  @Mutation(() => Brand)
  createBrand(
    @Args('createBrandInput')
    createBrandInput: CreateBrandInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.brandsService.create(createBrandInput, user);
  }

  @Query(() => [Brand], { name: 'brands' })
  findAll() {
    return this.brandsService.findAll();
  }

  @Query(() => Brand, { name: 'brand' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.brandsService.findOne(id);
  }

  @Mutation(() => Brand)
  updateBrand(
    @Args('id') id: number,
    @Args('updateBrandInput')
    updateBrandInput: UpdateBrandInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.brandsService.update(id, updateBrandInput, user);
  }

  @Mutation(() => Brand)
  removeBrand(@Args('id', { type: () => Int }) id: number) {
    return this.brandsService.remove(id);
  }
}
