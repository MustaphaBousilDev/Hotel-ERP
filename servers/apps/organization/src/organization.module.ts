import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { City } from './models/city.schema';
import { Hotel } from './models/hotel.schema';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModulemySQL, LoggerModule } from '@app/shared';
import { Organization } from './models/organization.schema';
import { Room } from './models/rooms.schema';
import { Departement } from './models/departement.schema';
import { Employee } from './models/employee.schema';
import { WifiModule } from './resources/wifi/wifi.module';
import { User } from './models/users.mysql.entity';
import { UserRepositorySQL } from './resources/users/users.repository';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([
      // Wifi,
      City,
      Hotel,
      Organization,
      Room,
      Departement,
      Employee,
      User,
    ]),
    LoggerModule,
    WifiModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService, UserRepositorySQL],
})
export class OrganizationModule {}
