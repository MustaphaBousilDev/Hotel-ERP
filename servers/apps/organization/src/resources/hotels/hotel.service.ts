import { Injectable } from '@nestjs/common';
import { HotelRepositorySQL } from './hotel.repository';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { CreateHotelInput } from './dto/create-hotel.input';
import { Hotel } from '../../models/hotel.schema';

@Injectable()
export class HotelService {
  constructor(private readonly hotelRepository: HotelRepositorySQL) {}
  async create(
    createHotelDto: CreateHotelInput,
    { _id: user_id }: UserInfoDto,
  ) {
    /*const hotel = new Hotel({
      ...createHotelDto,
      user_id: user_id,
    });
    return this.hotelRepository.create(hotel);*/
  }

  async findAll() {
    //return this.hotelRepository.find({});
  }

  async findOne(_id: any) {
    //return this.hotelRepository.findOne({ _id });
  }

  async update(
    _id: any,
    updateHotelDto: CreateHotelInput,
    { _id: user_id }: UserInfoDto,
  ) {
    /*const update = {
      ...updateHotelDto,
      user_id,
    };
    return this.hotelRepository.findOneAndUpdate({ _id }, update);*/
  }

  remove(_id: any) {
    //this.hotelRepository.findOneAndDelete({ _id });
  }
}
