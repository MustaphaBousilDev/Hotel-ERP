import { Test, TestingModule } from '@nestjs/testing';
import { TimeworksService } from './timeworks.service';

describe('TimeworksService', () => {
  let service: TimeworksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeworksService],
    }).compile();

    service = module.get<TimeworksService>(TimeworksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
