import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { City } from './models/city.schema';
import { Hotel } from './models/hotel.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AUTH_SERVICE, DatabaseModulemySQL, LoggerModule, UPLOAD_S3 } from '@app/shared';
import { Organization } from './models/organization.schema';
import { Room } from './models/rooms.schema';
import { Departement } from './models/departement.schema';
import { Employee } from './models/employee.schema';
import { WifiModule } from './resources/wifi/wifi.module';
import { User } from './models/users.mysql.entity';
import { UserRepositorySQL } from './resources/users/users.repository';
import { OrganizationRepositorymySQL } from './organization.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([
      // Wifi,
      City,
      Hotel,
      Organization,
      Room,
      Departement,
      Employee,
      User,
    ]),
    LoggerModule,
    WifiModule,
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
    UserRepositorySQL,
    OrganizationRepositorymySQL,
  ],
})
export class OrganizationModule {}
