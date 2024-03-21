import { Module } from '@nestjs/common';
import { DatabaseModulemySQL } from '@app/shared';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { HotelResolver } from './hotel.resolver';
import { HotelService } from './hotel.service';
import {
  CityRepositorySQL,
  DepartementRepositorySQL,
  HotelRepositorySQL,
  OrganizationRepositorySQL,
} from './hotel.repository';
import { Hotel } from '../../models/hotel.schema';
import { UserRepositorySQLForRoom } from '../users/users.repository';
import { UserRepositoryModule } from '../users/users.module';
import { City } from '../../models/city.schema';
import { Departement } from '../../models/departement.schema';
import { Organization } from '../../models/organization.schema';
import { Wifi } from '../../models/wifi.schema';
import { Room } from '../../models/rooms.schema';
import { User } from '../../models/users.mysql.entity';

@Module({
  imports: [
    UserRepositoryModule,
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([
      Hotel,
      City,
      Departement,
      Organization,
      Wifi,
      Room,
      User,
    ]),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [
    HotelResolver,
    HotelService,
    HotelRepositorySQL,
    UserRepositorySQLForRoom,
    CityRepositorySQL,
    OrganizationRepositorySQL,
    DepartementRepositorySQL,
  ],
})
export class HotelModule {}
