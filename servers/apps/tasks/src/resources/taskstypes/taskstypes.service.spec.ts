import { Test, TestingModule } from '@nestjs/testing';
import { TaskstypesService } from './taskstypes.service';

describe('TaskstypesService', () => {
  let service: TaskstypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskstypesService],
    }).compile();

    service = module.get<TaskstypesService>(TaskstypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
