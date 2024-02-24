import { Test, TestingModule } from '@nestjs/testing';
import { HisytoryService } from './hisytory.service';

describe('HisytoryService', () => {
  let service: HisytoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HisytoryService],
    }).compile();

    service = module.get<HisytoryService>(HisytoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
