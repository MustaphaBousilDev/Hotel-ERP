import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_SERVICE, DatabaseModulemySQL, LoggerModule } from '@app/shared';
import { Tasks } from './models/tasks.entity';
import { TasksType } from './models/tasks-type.entity';
import { TasksResolver } from './tasks.resolver';
import {
  EmployeeRepositorymySQL,
  TaskAttachementRepositorymySQL,
  TasksRepositorymySQL,
  TasksTypeRepositorymySQL,
} from './tasks.repository';
import { Employee } from './models/employee.entity';
import { Organization } from './models/organization.entity';
import { Hotel } from './models/hotel.entity';
import { Task_History } from './models/task-history.entity';
import { TasksAttach } from './models/tasks-attachement.entity';
import { Departement } from './models/departement.entity';
import { TaskstypesModule } from './resources/taskstypes/taskstypes.module';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([
      Tasks,
      TasksType,
      Employee,
      Organization,
      Hotel,
      Task_History,
      TasksAttach,
      Departement,
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LoggerModule,
    TaskstypesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.getOrThrow<string>('RABBITMQ_URI')],
            queue: 'auth',
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [TasksController],
  providers: [
    TasksService,
    TasksResolver,
    TasksRepositorymySQL,
    TasksTypeRepositorymySQL,
    TaskAttachementRepositorymySQL,
    EmployeeRepositorymySQL,
  ],
})
export class TasksModule {}
