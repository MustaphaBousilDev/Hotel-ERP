import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { City } from './models/city.schema';
import { Hotel } from './models/hotel.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  AUTH_SERVICE,
  DatabaseModulemySQL,
  LoggerModule,
  UPLOAD_S3,
} from '@app/shared';
import { Organization } from './models/organization.schema';
import { Departement } from './models/departement.schema';
import { Employee } from './models/employee.schema';
import { WifiModule } from './resources/wifi/wifi.module';
import { User } from './models/users.mysql.entity';
import { OrganizationRepositorymySQL } from './organization.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { OrganizationResolver } from './organization.resolver';
import { RoomModule } from './resources/rooms/room.module';
import { DepartementModule } from './resources/departements/departement.module';
import { UserRepositorySQLForRoom } from './resources/users/users.repository';
import { UserRepositoryModule } from './resources/users/users.module';
import { HotelModule } from './resources/hotels/hotel.module';

@Module({
  imports: [
    UserRepositoryModule,
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([
      // Wifi,
      City,
      Hotel,
      Organization,
      Departement,
      Employee,
      User,
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LoggerModule,
    RoomModule,
    HotelModule,
    WifiModule,
    DepartementModule,
    ConfigModule.forRoot({ isGlobal: true }),
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
        name: UPLOAD_S3,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.getOrThrow<string>('RABBITMQ_URI')],
            queue: 's3',
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [OrganizationController],
  providers: [
    OrganizationService,
    OrganizationRepositorymySQL,
    OrganizationResolver,
    UserRepositorySQLForRoom,
  ],
})
export class OrganizationModule {}
