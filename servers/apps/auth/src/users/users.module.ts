import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserRepositorySQL } from './users.repository';
import { DatabaseModulemySQL, Role, User } from '@app/shared';
import { LoggerModule } from 'nestjs-pino';
import { UsersResolver } from './users.resolver';

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
  providers: [UsersService, UserRepositorySQL, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
