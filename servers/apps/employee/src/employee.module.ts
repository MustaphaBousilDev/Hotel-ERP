import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { DatabaseModulemySQL, LoggerModule } from '@app/shared';
import { ConfigModule } from '@nestjs/config';
import { UserEMP } from './models/users.schema';
import { HotelEMP } from './models/hotel.schema';
import { OrganizationEMP } from './models/organization.schema';
import { DepartementEMP } from './models/departement.schema';
import { EmployeeEMP } from './models/employee.schema';
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
import { EmployeeResolver } from './employee.resolver';
import { EmployeeController } from './employee.controller';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([
      UserEMP,
      HotelEMP,
      OrganizationEMP,
      DepartementEMP,
      EmployeeEMP,
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
    EmployeeResolver,
    EmployeeService,
    EmployeeRepositorymySQL,
    DepartementRepositorymySQL,
    UserRepositorymySQL,
    PositionRepositorymySQL,
    timeWorkRepositorymySQL,
  ],
})
export class EmployeeModule {}
