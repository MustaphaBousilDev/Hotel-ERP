import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TagsService } from './tags.service';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tags } from '../../models';

@Resolver(() => Tags)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Mutation(() => Tags)
  createTag(@Args('createTagInput') createTagInput: CreateTagInput) {
    return this.tagsService.create(createTagInput);
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
  updateTag(@Args('updateTagInput') updateTagInput: UpdateTagInput) {
    return this.tagsService.update(updateTagInput.id, updateTagInput);
  }

  @Mutation(() => Tags)
  removeTag(@Args('id', { type: () => Int }) id: number) {
    return this.tagsService.remove(id);
  }
}
