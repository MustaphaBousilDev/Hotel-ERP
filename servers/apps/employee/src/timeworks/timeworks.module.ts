import { Module } from '@nestjs/common';
import { TimeworksService } from './timeworks.service';
import { TimeworksResolver } from './timeworks.resolver';

@Module({
  providers: [TimeworksResolver, TimeworksService],
})
export class TimeworksModule {}
