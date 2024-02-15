import { Injectable } from '@nestjs/common';
import { CreateWifiInput } from './dto/create-wifi.input';
import { WifiRepositorySQL } from './wifi.repository';
import { User } from '@app/shared';
import { Wifi } from '../../models/wifi.schema';
// import { UpdateWifiInput } from './dto/update-wifi.input';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';

@Injectable()
export class WifiService {
  constructor(private readonly wifiRepository: WifiRepositorySQL) {}
  async create(createWifiDto: CreateWifiInput, { _id: userId }: UserInfoDto) {
    const wifi = new Wifi({
      ...createWifiDto,
      user_id: userId,
    });
    return this.wifiRepository.create(wifi);
  }

  async findAll() {
    return this.wifiRepository.find({});
  }

  async findOne(_id: any) {
    return this.wifiRepository.findOne({ _id });
  }

  async update(
    _id: any,
    updateWifiDto: CreateWifiInput,
    { _id: user_id }: User,
  ) {
    const update = {
      ...updateWifiDto,
      user_id,
    };
    return this.wifiRepository.findOneAndUpdate({ _id }, update);
  }

  remove(_id: any) {
    this.wifiRepository.findOneAndDelete({ _id });
  }
}
