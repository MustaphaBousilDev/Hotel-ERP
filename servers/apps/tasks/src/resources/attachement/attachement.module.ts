import { Module } from '@nestjs/common';
import { AttachementService } from './attachement.service';
import { AttachementResolver } from './attachement.resolver';
import { DatabaseModulemySQL } from '@app/shared';
import { TasksAttach } from '../../models/tasks-attachement.entity';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import {
  EmployeeRepositorymySQL,
  TasksAttachementRepositorymySQL,
} from './attachement.repository';
import { Employee } from '../../models/employee.entity';
import { Tasks } from '../../models/tasks.entity';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([TasksAttach, Employee, Tasks]),
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
    AttachementResolver,
    AttachementService,
    TasksAttachementRepositorymySQL,
    EmployeeRepositorymySQL,
  ],
})
export class AttachementModule {}
