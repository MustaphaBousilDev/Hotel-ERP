import { Test, TestingModule } from '@nestjs/testing';
import { TaskstypesResolver } from './taskstypes.resolver';
import { TaskstypesService } from './taskstypes.service';

describe('TaskstypesResolver', () => {
  let resolver: TaskstypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskstypesResolver, TaskstypesService],
    }).compile();

    resolver = module.get<TaskstypesResolver>(TaskstypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
