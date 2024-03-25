import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { CurrentUser } from '@app/shared';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { Category } from '../../models';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput')
    createCategoryInput: CreateCategoryInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.categoriesService.create(createCategoryInput, user);
  }

  @Query(() => [Category], { name: 'categories' })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Mutation(() => Category)
  updateCategory(
    @Args('id') id: number,
    @Args('updateCategoryInput')
    updateCategoryInput: UpdateCategoryInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.categoriesService.update(id, updateCategoryInput, user);
  }

  @Mutation(() => Category)
  removeCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoriesService.remove(id);
  }
}
