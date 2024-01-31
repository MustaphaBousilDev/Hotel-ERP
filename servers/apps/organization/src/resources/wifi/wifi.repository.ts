import { AbstractRepositorymySQL } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { Wifi } from '../../models/wifi.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

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
