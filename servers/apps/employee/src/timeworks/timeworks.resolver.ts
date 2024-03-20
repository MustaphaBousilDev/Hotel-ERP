import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TimeworksService } from './timeworks.service';
import { CreateTimeworkInput } from './dto/create-timework.input';
import { UpdateTimeworkInput } from './dto/update-timework.input';
import { TimeWork } from '../models/time-work.schema';
import { CurrentUser } from '@app/shared';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';

@Resolver(() => TimeWork)
export class TimeworksResolver {
  constructor(private readonly timeworksService: TimeworksService) {}

  @Mutation(() => TimeWork)
  createTimework(
    @Args('createTimeworkInput')
    createTimeworkInput: CreateTimeworkInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.timeworksService.create(createTimeworkInput, user);
  }

  @Query(() => [TimeWork], { name: 'timeworks' })
  findAll() {
    return this.timeworksService.findAll();
  }

  @Query(() => TimeWork, { name: 'timework' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.timeworksService.findOne(id);
  }

  @Mutation(() => TimeWork)
  async updateTimework(
    @Args('id') id: number,
    @Args('updateTimeworkInputs')
    updateTimeWorkInput: UpdateTimeworkInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.timeworksService.update(id, updateTimeWorkInput, user);
  }

  @Mutation(() => TimeWork)
  removeTimework(@Args('id', { type: () => Int }) id: number) {
    return this.timeworksService.remove(id);
  }
}
