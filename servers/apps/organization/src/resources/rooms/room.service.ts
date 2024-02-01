import { Injectable } from '@nestjs/common';
import { CreateRoomInput } from './dto/create-room.input';
import { RoomRepositorySQL } from './room.repository';
import { User } from '@app/shared';
import { UpdateRoomInput } from './dto/update-room.input';
import { Room } from '../../models/rooms.schema';

@Injectable()
export class RoomService {
  constructor(private readonly roomRepository: RoomRepositorySQL) {}
  async create(createRoomDto: CreateRoomInput, { _id: user_id }: User) {
    const room = new Room({
      ...createRoomDto,
      user_id,
    });
    return this.roomRepository.create(room);
  }

  async findAll() {
    return this.roomRepository.find({});
  }

  async findOne(_id: any) {
    return this.roomRepository.findOne({ _id });
  }

  async update(
    _id: any,
    updateWifiDto: UpdateRoomInput,
    { _id: user_id }: User,
  ) {
    const update = {
      ...updateWifiDto,
      user_id,
    };
    return this.roomRepository.findOneAndUpdate({ _id }, update);
  }

  remove(_id: any) {
    this.roomRepository.findOneAndDelete({ _id });
  }
}
