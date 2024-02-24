import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskstypesService } from './taskstypes.service';
import { Taskstype } from './entities/taskstype.entity';
import { CreateTaskstypeInput } from './dto/create-taskstype.input';
import { UpdateTaskstypeInput } from './dto/update-taskstype.input';

@Resolver(() => Taskstype)
export class TaskstypesResolver {
  constructor(private readonly taskstypesService: TaskstypesService) {}

  @Mutation(() => Taskstype)
  createTaskstype(@Args('createTaskstypeInput') createTaskstypeInput: CreateTaskstypeInput) {
    return this.taskstypesService.create(createTaskstypeInput);
  }

  @Query(() => [Taskstype], { name: 'taskstypes' })
  findAll() {
    return this.taskstypesService.findAll();
  }

  @Query(() => Taskstype, { name: 'taskstype' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.taskstypesService.findOne(id);
  }

  @Mutation(() => Taskstype)
  updateTaskstype(@Args('updateTaskstypeInput') updateTaskstypeInput: UpdateTaskstypeInput) {
    return this.taskstypesService.update(updateTaskstypeInput.id, updateTaskstypeInput);
  }

  @Mutation(() => Taskstype)
  removeTaskstype(@Args('id', { type: () => Int }) id: number) {
    return this.taskstypesService.remove(id);
  }
}
