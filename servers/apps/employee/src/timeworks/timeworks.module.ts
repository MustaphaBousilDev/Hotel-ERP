import { Module } from '@nestjs/common';
import { TimeworksService } from './timeworks.service';
import { TimeworksResolver } from './timeworks.resolver';
import { DatabaseModulemySQL, LoggerModule } from '@app/shared';
import { User } from '../models/users.schema';
import { TimeWork } from '../models/time-work.schema';
import { Employee } from '../models/employee.schema';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([User, TimeWork, Employee]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [TimeworksResolver, TimeworksService],
})
export class TimeworksModule {}
