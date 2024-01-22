import { Inject, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import {
  ReservationsRepository,
  ReservationsRepositorymySQL,
} from './reservations.repository';
import { PAYMENT_SERVICE, UserDto } from '@app/shared';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { Reservation } from './models/reservation.mysql.entity';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationRepository: ReservationsRepositorymySQL,
    @Inject(PAYMENT_SERVICE) private readonly paymentsService: ClientProxy,
  ) {}
  async create(
    createReservationDto: CreateReservationDto,
    { email, _id: userId }: UserDto,
  ) {
    return this.paymentsService
      .send('create_charge', {
        ...createReservationDto.charge,
        email, //for using in notifications microservice
      }) //send is used to send a message to the microservice and 'create_charge' is the pattern that the microservice is listening for and createReservationDto.charge is the data that is sent to the microservice
      .pipe(
        //tap is used to perform side effects on the data coming in from the microservice in other words it is used to perform operations on the data coming in from the microservice(for example logging the data coming in from the microservice)
        //map is used to handle asynchronous operations
        map((res) => {
          const reservation = new Reservation({
            ...createReservationDto,
            //id of payment in stripe
            invoiceId: res.id,
            timestamp: new Date(),
            userId,
          });
          return this.reservationRepository.create(reservation);
        }),
      );
  }

  async findAll() {
    return this.reservationRepository.find({});
  }

  async findOne(_id: any) {
    return this.reservationRepository.findOne({ _id });
  }

  async update(_id: any, updateReservationDto: UpdateReservationDto) {
    return this.reservationRepository.findOneAndUpdate(
      { _id },
      updateReservationDto, // for typeORM
      // { $set: updateReservationDto }, # for mongo
    );
  }

  async remove(_id: any) {
    return this.reservationRepository.findOneAndDelete({ _id });
  }
}
