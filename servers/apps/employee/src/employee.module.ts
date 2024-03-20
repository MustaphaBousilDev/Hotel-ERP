import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { DatabaseModulemySQL, LoggerModule } from '@app/shared';
import { ConfigModule } from '@nestjs/config';
import { User } from './models/users.schema';
import { Hotel } from './models/hotel.schema';
import { Organization } from './models/organization.schema';
import { Departement } from './models/departement.schema';
import { Employee } from './models/employee.schema';
import { Position } from './models/position.schema';
import { TimeWork } from './models/time-work.schema';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { PositionsModule } from './positions/positions.module';
import { TimeworksModule } from './timeworks/timeworks.module';
import {
  DepartementRepositorymySQL,
  EmployeeRepositorymySQL,
  PositionRepositorymySQL,
  UserRepositorymySQL,
  timeWorkRepositorymySQL,
} from './employee.repository';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([
      User,
      Hotel,
      Organization,
      Departement,
      Employee,
      Position,
      TimeWork,
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PositionsModule,
    TimeworksModule,
  ],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    EmployeeRepositorymySQL,
    DepartementRepositorymySQL,
    UserRepositorymySQL,
    PositionRepositorymySQL,
    timeWorkRepositorymySQL,
  ],
})
export class EmployeeModule {}
