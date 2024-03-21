import { Test, TestingModule } from '@nestjs/testing';
import { SubcategoririesService } from './subcategoriries.service';

describe('SubcategoririesService', () => {
  let service: SubcategoririesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubcategoririesService],
    }).compile();

    service = module.get<SubcategoririesService>(SubcategoririesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
