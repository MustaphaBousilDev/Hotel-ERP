import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { Reservation } from './models/reservation.mysql.entity';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { CurrentUser } from '@app/shared';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { UserRES } from './models/users.mysql.entity';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';

@Resolver(() => Reservation)
export class ReservationsResolver {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Mutation(() => Reservation)
  createReservation(
    @Args('createReservationInput')
    createReservationInput: CreateReservationDto,
    @CurrentUser() user: UserInfoDto,
  ) {
    console.log('############reservations############');
    console.log(createReservationInput);
    console.log('############## user');
    console.log(user);
    return this.reservationsService.create(createReservationInput, user);
  }

  @Query(() => [Reservation], { name: 'reservations' })
  findAll() {
    return this.reservationsService.findAll();
  }

  @Query(() => Reservation, { name: 'reservation' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.reservationsService.findOne(id);
  }

  @Mutation(() => Reservation)
  removeReservation(@Args('id', { type: () => Number }) id: number) {
    return this.reservationsService.remove(id);
  }
  /*@MessagePattern('createUserResr')
  createUser(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(' ########################## success message ');
    console.log(' ########################## success  ');
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    //telling RabbitMQ that it has been successfully received and processed. This is important in message queue systems to prevent messages from being reprocessed in case of failures.
    channel.ack(originalMsg);
    console.log(data);
  }*/
}
