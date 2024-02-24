import { Module } from '@nestjs/common';
import { HisytoryService } from './hisytory.service';
import { HisytoryResolver } from './hisytory.resolver';

@Module({
  providers: [HisytoryResolver, HisytoryService],
})
export class HisytoryModule {}
