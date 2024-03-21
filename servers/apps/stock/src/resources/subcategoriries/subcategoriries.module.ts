import { Module } from '@nestjs/common';
import { SubcategoririesService } from './subcategoriries.service';
import { SubcategoririesResolver } from './subcategoriries.resolver';

@Module({
  providers: [SubcategoririesResolver, SubcategoririesService],
})
export class SubcategoririesModule {}
