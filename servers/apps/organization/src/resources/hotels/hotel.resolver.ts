import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HotelService } from './hotel.service';
import { CurrentUser } from '@app/shared';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { CreateHotelInput } from './dto/create-hotel.input';
import { Hotel } from '../../models/hotel.schema';

@Resolver(() => Hotel)
export class HotelResolver {
  constructor(private readonly hotelService: HotelService) {}

  @Mutation(() => Hotel)
  createHotel(
    @Args('createHotelInput')
    createHotelInput: CreateHotelInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    console.log('######################################');
    console.log('resolver');
    console.log(createHotelInput.city);
    return this.hotelService.create(createHotelInput, user);
  }

  @Query(() => [Hotel], { name: 'hotel' })
  findAll() {
    return this.hotelService.findAll();
  }

  @Query(() => Hotel, { name: 'hotel' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.hotelService.findOne(id);
  }

  @Mutation(() => Hotel)
  updateHotel(
    @Args('id') id: number,
    @Args('updateHotelInput')
    updateHotelInput: CreateHotelInput,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.hotelService.update(id, updateHotelInput, user);
  }

  @Mutation(() => Hotel)
  removeDepartement(@Args('id', { type: () => Number }) id: number) {
    return this.hotelService.remove(id);
  }
}
