import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HisytoryService } from './hisytory.service';
import { Hisytory } from './entities/hisytory.entity';
import { CreateHisytoryInput } from './dto/create-hisytory.input';
import { UpdateHisytoryInput } from './dto/update-hisytory.input';

@Resolver(() => Hisytory)
export class HisytoryResolver {
  constructor(private readonly hisytoryService: HisytoryService) {}

  @Mutation(() => Hisytory)
  createHisytory(@Args('createHisytoryInput') createHisytoryInput: CreateHisytoryInput) {
    return this.hisytoryService.create(createHisytoryInput);
  }

  @Query(() => [Hisytory], { name: 'hisytory' })
  findAll() {
    return this.hisytoryService.findAll();
  }

  @Query(() => Hisytory, { name: 'hisytory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hisytoryService.findOne(id);
  }

  @Mutation(() => Hisytory)
  updateHisytory(@Args('updateHisytoryInput') updateHisytoryInput: UpdateHisytoryInput) {
    return this.hisytoryService.update(updateHisytoryInput.id, updateHisytoryInput);
  }

  @Mutation(() => Hisytory)
  removeHisytory(@Args('id', { type: () => Int }) id: number) {
    return this.hisytoryService.remove(id);
  }
}
