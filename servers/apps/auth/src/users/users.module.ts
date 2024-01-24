import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository, UserRepositorySQL } from './users.repository';
import { DatabaseModule, DatabaseModulemySQL, Role, User } from '@app/shared';
import { LoggerModule } from 'nestjs-pino';

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
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepositorySQL],
  exports: [UsersService],
})
export class UsersModule {}
