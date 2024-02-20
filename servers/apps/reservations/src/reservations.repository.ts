import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
// import { ReservationDocument } from './models/reservation.mongo.schema';
import { Reservation } from './models/reservation.mysql.entity';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

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
