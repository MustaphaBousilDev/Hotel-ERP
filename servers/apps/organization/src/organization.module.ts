import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { City } from './models/city.schema';
import { Hotel } from './models/hotel.schema';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModulemySQL, LoggerModule } from '@app/shared';
import { Organization } from './models/organization.schema';
import { Wifi } from './models/wifi.schema';
import { Room } from './models/rooms.schema';
import { Departement } from './models/departement.schema';

@Module({
  imports: [
    DatabaseModulemySQL,
    DatabaseModulemySQL.forFeature([
      City,
      Hotel,
      Organization,
      Wifi,
      Room,
      Departement,
    ]),
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService],
})
export class OrganizationModule {}
