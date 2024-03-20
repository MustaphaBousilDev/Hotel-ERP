import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TimeworksService } from './timeworks.service';
import { Timework } from './entities/timework.entity';
import { CreateTimeworkInput } from './dto/create-timework.input';
import { UpdateTimeworkInput } from './dto/update-timework.input';

@Resolver(() => Timework)
export class TimeworksResolver {
  constructor(private readonly timeworksService: TimeworksService) {}

  @Mutation(() => Timework)
  createTimework(@Args('createTimeworkInput') createTimeworkInput: CreateTimeworkInput) {
    return this.timeworksService.create(createTimeworkInput);
  }

  @Query(() => [Timework], { name: 'timeworks' })
  findAll() {
    return this.timeworksService.findAll();
  }

  @Query(() => Timework, { name: 'timework' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.timeworksService.findOne(id);
  }

  @Mutation(() => Timework)
  updateTimework(@Args('updateTimeworkInput') updateTimeworkInput: UpdateTimeworkInput) {
    return this.timeworksService.update(updateTimeworkInput.id, updateTimeworkInput);
  }

  @Mutation(() => Timework)
  removeTimework(@Args('id', { type: () => Int }) id: number) {
    return this.timeworksService.remove(id);
  }
}
