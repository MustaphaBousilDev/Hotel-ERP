import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule, TypeOrmModule.forFeature([User])],
  providers: [],
  exports: [],
})
export class RepositoryModule {}
