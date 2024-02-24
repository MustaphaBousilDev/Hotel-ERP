import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CurrentUser, User } from '@app/shared';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { TasksService } from './tasks.service';
import { Tasks } from './models/tasks.entity';
import { TasksDtoInput } from './dto/tasks.dto';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { TasksDtoUpdate } from './dto/tasks-update.dto';

@Resolver()
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Mutation(() => Tasks)
  createTasks(
    @Args('createTaskInput')
    createTaskInput: TasksDtoInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    console.log('##############################');
    console.log('##############################');
    console.log(createTaskInput);
    console.log('##############################');
    console.log('##############################');
    return this.tasksService.create(createTaskInput, user);
  }

  @Mutation(() => Tasks)
  updateTasks(
    @Args('id') id: number,
    @Args('updateTasksInputs')
    updateTasksInput: TasksDtoUpdate,
    @CurrentUser() user: User,
  ) {
    //check if organization exists
    // const existingOrganization =
    //   await this.organizationService.findOne(organizationId);
    // if (!existingOrganization) {
    //   throw new NotFoundException('Organization not found');
    // }
    return this.tasksService.update(id, updateTasksInput, user);
  }

  @Query(() => [Tasks], { name: 'tasksAll' })
  findAllTasks() {
    return this.tasksService.findAll();
  }

  @Query(() => Tasks, { name: 'tasks' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.tasksService.findOne(id);
  }

  @Mutation(() => Tasks)
  async removeTasks(@Args('id', { type: () => Number }) id: number) {
    console.log(id);
    await this.tasksService.remove(id);
    return { message: 'Suceess' };
  }
  @MessagePattern('createUserResr')
  createUser(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    //telling RabbitMQ that it has been successfully received and processed. This is important in message queue systems to prevent messages from being reprocessed in case of failures.
    channel.ack(originalMsg);
    console.log(data);
  }
}
