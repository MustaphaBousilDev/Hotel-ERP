import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { Wifi } from '../../models/wifi.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Hotel } from '../../models/hotel.schema';
import { User } from '../../models/users.mysql.entity';

@Injectable()
export class WifiRepositorySQL extends AbstractRepositorymySQL<Wifi> {
  protected readonly logger = new Logger(WifiRepositorySQL.name);

  constructor(
    @InjectRepository(Wifi)
    WifiRepository: Repository<Wifi>,
    entityManager: EntityManager,
  ) {
    super(WifiRepository, entityManager);
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
