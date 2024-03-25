import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TagsService } from './tags.service';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tags } from '../../models';
import { CurrentUser } from '@app/shared';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';

@Resolver(() => Tags)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Mutation(() => Tags)
  createTag(
    @Args('createTagInput') createTagInput: CreateTagInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.tagsService.create(createTagInput, user);
  }

  @Query(() => [Tags], { name: 'tags' })
  findAll() {
    return this.tagsService.findAll();
  }

  @Query(() => Tags, { name: 'tag' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tagsService.findOne(id);
  }

  @Mutation(() => Tags)
  updateTag(
    @Args('id') _id: number,
    @Args('updateTagInput')
    updateTagInput: UpdateTagInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.tagsService.update(_id, updateTagInput, user);
  }

  @Mutation(() => Tags)
  removeTag(@Args('id', { type: () => Int }) id: number) {
    return this.tagsService.remove(id);
  }
}
