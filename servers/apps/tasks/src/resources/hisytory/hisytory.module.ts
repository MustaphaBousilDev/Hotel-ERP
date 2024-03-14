import { Module } from '@nestjs/common';
import { HisytoryService } from './hisytory.service';
import { HisytoryResolver } from './hisytory.resolver';
import { DatabaseModulemySQL } from '@app/shared';
import { Task_History } from '../../models/task-history.entity';
import { Tasks } from '../../models/tasks.entity';
import { Employee } from '../../models/employee.entity';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import {
  EmployeeRepositorymySQL,
  TaskHistoryRepositorymySQL,
  TasksRepositorymySQL,
} from './history.repository';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([Task_History, Tasks, Employee]),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloFederationDriver,
    //   autoSchemaFile: {
    //     federation: 2,
    //   },
    // }),
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [
    HisytoryResolver,
    HisytoryService,
    TasksRepositorymySQL,
    TaskHistoryRepositorymySQL,
    EmployeeRepositorymySQL,
  ],
})
export class HisytoryModule {}
