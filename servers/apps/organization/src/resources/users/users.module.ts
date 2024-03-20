import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepositorySQLForRoom } from './users.repository';
import { User } from '../../models/users.mysql.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Import TypeOrmModule with User repository
  providers: [UserRepositorySQLForRoom], // Provide UserRepositorySQLForRoom
  exports: [UserRepositorySQLForRoom], // Export UserRepositorySQLForRoom for dependency injection
})
export class UserRepositoryModule {}
