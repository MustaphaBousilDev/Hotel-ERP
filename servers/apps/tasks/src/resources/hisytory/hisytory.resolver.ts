import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HisytoryService } from './hisytory.service';
import { Task_History } from '../../models/task-history.entity';
import { TasksHistoryDtoInput } from '../../dto/task-history.dto';
import { TasksHistoryUpdateDTO } from '../../dto/task-history-update.dto';

@Resolver(() => Task_History)
export class HisytoryResolver {
  constructor(private readonly hisytoryService: HisytoryService) {}

  @Mutation(() => Task_History)
  createHisytory(
    @Args('createHisytoryInput') createHisytoryInput: TasksHistoryDtoInput,
  ) {
    return this.hisytoryService.create(createHisytoryInput);
  }

  @Query(() => [Task_History], { name: 'hisytories' })
  findAllHistory() {
    return this.hisytoryService.findAll();
  }

  @Query(() => Task_History, { name: 'hisytory' })
  findOneHistory(@Args('id', { type: () => Int }) id: number) {
    return this.hisytoryService.findOne(id);
  }

  @Mutation(() => Task_History)
  updateHisytory(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateHisytoryInput')
    updateHisytoryInput: TasksHistoryUpdateDTO,
  ) {
    return this.hisytoryService.update(id, updateHisytoryInput);
  }

  @Mutation(() => Task_History)
  removeHisytory(@Args('id', { type: () => Int }) id: number) {
    return this.hisytoryService.remove(id);
  }
}
