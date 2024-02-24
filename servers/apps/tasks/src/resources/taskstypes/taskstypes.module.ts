import { Module } from '@nestjs/common';
import { TaskstypesService } from './taskstypes.service';
import { TaskstypesResolver } from './taskstypes.resolver';

@Module({
  providers: [TaskstypesResolver, TaskstypesService],
})
export class TaskstypesModule {}
