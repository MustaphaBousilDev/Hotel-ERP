import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Room } from '../../models/rooms.schema';
import { Hotel } from '../../models/hotel.schema';
import { User } from '../../models/users.mysql.entity';

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
