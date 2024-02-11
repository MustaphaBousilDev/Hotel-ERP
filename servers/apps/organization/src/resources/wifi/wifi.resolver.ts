import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WifiService } from './wifi.service';
import { Wifi } from '../../models/wifi.schema';
import { CreateWifiInput } from './dto/create-wifi.input';
import { UpdateWifiInput } from './dto/update-wifi.input';
import { CurrentUser, User } from '@app/shared';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';

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

  @Query(() => [Wifi], { name: 'wifi' })
  findAll() {
    return this.wifiService.findAll();
  }

  @Query(() => Wifi, { name: 'wifi' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.wifiService.findOne(id);
  }

  @Mutation(() => Wifi)
  updateWifi(
    @Args('updateWifiInput') updateWifiInput: UpdateWifiInput,
    @CurrentUser() user: User,
  ) {
    return this.wifiService.update(updateWifiInput.id, updateWifiInput, user);
  }

  @Mutation(() => Wifi)
  removeWifi(@Args('id', { type: () => Number }) id: number) {
    return this.wifiService.remove(id);
  }
}
