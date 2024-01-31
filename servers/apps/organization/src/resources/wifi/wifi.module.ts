import { Module } from '@nestjs/common';
import { WifiService } from './wifi.service';
import { WifiResolver } from './wifi.resolver';
import { DatabaseModulemySQL } from '@app/shared';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

@Module({
  imports: [
    DatabaseModulemySQL,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [WifiResolver, WifiService],
})
export class WifiModule {}
