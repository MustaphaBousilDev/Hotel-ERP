import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WifiService } from './wifi.service';
import { Wifi } from '../../models/wifi.schema';
import { CreateWifiInput } from './dto/create-wifi.input';
// import { UpdateWifiInput } from './dto/update-wifi.input';
import { CurrentUser } from '@app/shared';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { UpdateWifiInput } from './dto/update-wifi.input';

@Resolver(() => Wifi)
export class WifiResolver {
  constructor(private readonly wifiService: WifiService) {}

  @Mutation(() => Wifi)
  createWifi(
    @Args('createWifiInput') createWifiInput: CreateWifiInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.wifiService.create(createWifiInput, user);
  }

  @Query(() => [Wifi], { name: 'wifis' })
  findAll() {
    return this.wifiService.findAll();
  }

  @Query(() => Wifi, { name: 'wifi' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.wifiService.findOne(id);
  }

  @Mutation(() => Wifi)
  updateWifi(
    @Args('id') id: number,
    @Args('updateWifiInput') updateWifiInput: UpdateWifiInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.wifiService.update(id, updateWifiInput, user);
  }

  @Mutation(() => Wifi)
  removeWifi(@Args('id', { type: () => Number }) id: number) {
    return this.wifiService.remove(id);
  }
}
