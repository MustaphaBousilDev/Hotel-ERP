import { Module } from '@nestjs/common';
import { AttachementService } from './attachement.service';
import { AttachementResolver } from './attachement.resolver';

@Module({
  providers: [AttachementResolver, AttachementService],
})
export class AttachementModule {}
