import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PositionsService } from './positions.service';
import { CreatePositionInput } from './dto/create-position.input';
import { UpdatePositionInput } from './dto/update-position.input';
import { CurrentUser } from '@app/shared';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { Position } from '../models/position.schema';

@Resolver(() => Position)
export class PositionsResolver {
  constructor(private readonly positionsService: PositionsService) {}

  @Mutation(() => Position)
  createPosition(
    @Args('createPositionInput')
    createPositionInput: CreatePositionInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.positionsService.create(createPositionInput, user);
  }

  @Query(() => [Position], { name: 'positions' })
  findAll() {
    return this.positionsService.findAll();
  }

  @Query(() => Position, { name: 'position' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.positionsService.findOne(id);
  }

  @Mutation(() => Position)
  updatePosition(
    @Args('id') id: number,
    @Args('updatePositionInput')
    updatePositionInput: UpdatePositionInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.positionsService.update(id, updatePositionInput, user);
  }

  @Mutation(() => Position)
  removePosition(@Args('id', { type: () => Int }) id: number) {
    return this.positionsService.remove(id);
  }
}
