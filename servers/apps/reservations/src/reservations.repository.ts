import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
// import { ReservationDocument } from './models/reservation.mongo.schema';
import { Reservation } from './models/reservation.mysql.entity';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Room } from './models/rooms.mysql.entity';
import { Hotel } from './models/hotel.mysql.entity';
import { User } from './models/users.mysql.entity';

// @Injectable()
// export class ReservationsRepository extends AbstractRepository<ReservationDocument> {
//   protected readonly logger = new Logger(ReservationsRepository.name);

//   constructor(
//     @InjectModel(ReservationDocument.name)
//     reservationModel: Model<ReservationDocument>,
//   ) {
//     super(reservationModel);
//   }
// }
@Injectable()
export class ReservationsRepositorymySQL extends AbstractRepositorymySQL<Reservation> {
  protected readonly logger = new Logger(ReservationsRepositorymySQL.name);

  constructor(
    @InjectRepository(Reservation)
    ReservationsRepository: Repository<Reservation>,
    entityManager: EntityManager,
  ) {
    super(ReservationsRepository, entityManager);
  }
}

@Injectable()
export class RoomRepositorySQL extends AbstractRepositorymySQL<Room> {
  protected readonly logger = new Logger(RoomRepositorySQL.name);

  constructor(
    @InjectRepository(Room)
    RoomRepository: Repository<Room>,
    entityManager: EntityManager,
  ) {
    super(RoomRepository, entityManager);
  }
}

@Injectable()
export class HotelRepositorySQL extends AbstractRepositorymySQL<Hotel> {
  protected readonly logger = new Logger(HotelRepositorySQL.name);

  constructor(
    @InjectRepository(Hotel)
    HotelRepository: Repository<Hotel>,
    entityManager: EntityManager,
  ) {
    super(HotelRepository, entityManager);
  }
}

@Injectable()
export class UserRepositorySQL extends AbstractRepositorymySQL<User> {
  protected readonly logger = new Logger(UserRepositorySQL.name);

  constructor(
    @InjectRepository(User)
    UserRepository: Repository<User>,
    entityManager: EntityManager,
  ) {
    super(UserRepository, entityManager);
  }
}
