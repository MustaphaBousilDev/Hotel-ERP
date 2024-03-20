import { Module } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { PositionsResolver } from './positions.resolver';
import { DatabaseModulemySQL, LoggerModule } from '@app/shared';
import { User } from '../models/users.schema';
import { Position } from '../models/position.schema';
import { Employee } from '../models/employee.schema';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([User, Position, Employee]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [PositionsResolver, PositionsService],
})
export class PositionsModule {}
