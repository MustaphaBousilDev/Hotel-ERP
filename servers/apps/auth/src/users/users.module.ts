import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserRepositorySQL } from './users.repository';
import {
  DatabaseModulemySQL,
  RESERVATION_SERVICE,
  Role,
  User,
} from '@app/shared';
import { LoggerModule } from 'nestjs-pino';
import { UsersResolver } from './users.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // DatabaseModule,
    //DatabaseModule.forFeature in databaseModel inside shared folder
    // DatabaseModule.forFeature([
    //   {
    //     name: UserDocument.name,
    //     schema: UserSchema,
    //   },
    // ]),
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([User, Role]),
    LoggerModule,
    ClientsModule.registerAsync([
      {
        name: RESERVATION_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.getOrThrow<string>('RABBITMQ_URI')],
            queue: 'reservations',
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepositorySQL, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
