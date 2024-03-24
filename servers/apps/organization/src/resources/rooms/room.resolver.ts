import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoomService } from './room.service';
import { CreateRoomInput } from './dto/create-room.input';
import { CurrentUser, User } from '@app/shared';
import { Room } from '../../models/rooms.schema';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { UpdateRoomInput } from './dto/update-room.input';

@Resolver(() => Room)
export class RoomResolver {
  constructor(private readonly roomService: RoomService) {}

  @Mutation(() => Room)
  createRoom(
    @Args('createRoomInput') createRoomInput: CreateRoomInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    console.log('################# room');
    console.log(createRoomInput.hotel);
    return this.roomService.create(createRoomInput, user);
  }

  @Query(() => [Room], { name: 'rooms' })
  findAll() {
    return this.roomService.findAll();
  }

  @Query(() => Room, { name: 'room' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.roomService.findOne(id);
  }

  @Mutation(() => Room)
  updateRoom(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateRoomInput') updateRoomInput: UpdateRoomInput,
    @CurrentUser() user: User,
  ) {
    console.log('######### update resolver');
    console.log(updateRoomInput);
    return this.roomService.update(id, updateRoomInput, user);
  }

  @Mutation(() => Room)
  removeRoom(@Args('id', { type: () => Number }) id: number) {
    return this.roomService.remove(id);
  }
}
