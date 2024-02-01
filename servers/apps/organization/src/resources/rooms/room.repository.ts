import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Room } from '../../models/rooms.schema';

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
