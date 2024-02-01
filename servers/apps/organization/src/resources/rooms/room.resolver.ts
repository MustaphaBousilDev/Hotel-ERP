import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoomService } from './room.service';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';
import { CurrentUser, User } from '@app/shared';
import { Room } from '../../models/rooms.schema';

@Resolver(() => Room)
export class RoomResolver {
  constructor(private readonly wifiService: RoomService) {}

  @Mutation(() => Room)
  createWifi(
    @Args('createRoomInput') createWifiInput: CreateRoomInput,
    @CurrentUser() user: User,
  ) {
    return this.wifiService.create(createWifiInput, user);
  }

  @Query(() => [Room], { name: 'room' })
  findAll() {
    return this.wifiService.findAll();
  }

  @Query(() => Room, { name: 'room' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.wifiService.findOne(id);
  }

  @Mutation(() => Room)
  updateWifi(
    @Args('updateRoomInput') updateWifiInput: UpdateRoomInput,
    @CurrentUser() user: User,
  ) {
    return this.wifiService.update(updateWifiInput.id, updateWifiInput, user);
  }

  @Mutation(() => Room)
  removeWifi(@Args('id', { type: () => Number }) id: number) {
    return this.wifiService.remove(id);
  }
}
