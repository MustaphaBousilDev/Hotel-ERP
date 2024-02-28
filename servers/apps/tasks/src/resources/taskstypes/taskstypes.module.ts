import { Module } from '@nestjs/common';
import { TaskstypesService } from './taskstypes.service';
import { TaskstypesResolver } from './taskstypes.resolver';
import { DatabaseModulemySQL } from '@app/shared';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import { Tasks } from '../../models/tasks.entity';
import { TasksType } from '../../models/tasks-type.entity';
import { Departement } from '../../models/departement.entity';
import {
  DepartementRepositorymySQL,
  TasksTypeRepositorymySQL,
} from './tasksTypes.repository';
@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([Tasks, TasksType, Departement]),
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
    TaskstypesResolver,
    TaskstypesService,
    TasksTypeRepositorymySQL,
    DepartementRepositorymySQL,
  ],
})
export class TaskstypesModule {}
