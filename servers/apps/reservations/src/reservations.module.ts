import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import {
  LoggerModule,
  AUTH_SERVICE,
  PAYMENT_SERVICE,
  DatabaseModulemySQL,
} from '@app/shared';
import { ReservationsRepositorymySQL } from './reservations.repository';
//for mysql typeorm
import { Reservation } from './models/reservation.mysql.entity';
import { User } from './models/users.mysql.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { ReservationsResolver } from './reservations.resolver';
import { Room } from './models/rooms.mysql.entity';
import { Hotel } from './models/hotel.mysql.entity';
import { Organization } from './models/organization.mysql.entity';
import { UserRepositorySQL } from './resources/users.repository';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([
      Reservation,
      User,
      Room,
      Hotel,
      Organization,
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      //generate automaticely graphQL schema using federation version 2
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        HTTP_PORT_RESERVATION: Joi.number().required(),
        AUTH_HOST: Joi.string().required(),
        AUTH_PORT: Joi.number().required(),
        PAYMENTS_HOST: Joi.string().required(),
        PAYMENTS_PORT: Joi.number().required(),
      }),
    }),
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.getOrThrow<string>('RABBITMQ_URI')],
            //actual name of the queu that were going to be using in this service
            queue: 'auth',
          },
        }),
        inject: [ConfigService],
      },
      {
        name: PAYMENT_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.getOrThrow<string>('RABBITMQ_URI')],
            //actual name of the queu that were going to be using in this service
            queue: 'payments',
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [ReservationsController],
  providers: [
    ReservationsService,
    // ReservationsRepository,
    ReservationsRepositorymySQL,
    ReservationsResolver,
    UserRepositorySQL,
  ],
})
export class ReservationsModule {}
