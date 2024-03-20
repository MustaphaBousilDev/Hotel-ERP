import { Module } from '@nestjs/common';
import { DatabaseModulemySQL } from '@app/shared';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Employee } from '../../models/employee.schema';
import { Departement } from '../../models/departement.schema';
import { DepartementResolver } from './departement.resolver';
import { DepartementService } from './departement.service';
import { DepartementRepositorySQL } from './departement.repository';
import { UserRepositorySQLForRoom } from '../users/users.repository';
import { UserRepositoryModule } from '../users/users.module';
import { User } from '../../models/users.mysql.entity';

@Module({
  imports: [
    UserRepositoryModule,
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([Departement, Employee, User]),
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
    DepartementResolver,
    DepartementService,
    DepartementRepositorySQL,
    UserRepositorySQLForRoom,
  ],
})
export class DepartementModule {}
