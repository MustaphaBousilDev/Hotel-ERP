import { Module } from '@nestjs/common';
import { CleanArchitectController } from './clean-architect.controller';
import { CleanArchitectService } from './clean-architect.service';

@Module({
  imports: [],
  controllers: [CleanArchitectController],
  providers: [CleanArchitectService],
})
export class CleanArchitectModule {}
