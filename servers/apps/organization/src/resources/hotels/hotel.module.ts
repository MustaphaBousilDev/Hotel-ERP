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

@Module({
  imports: [
    UserRepositoryModule,
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([Hotel]),
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
