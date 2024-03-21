import { Test, TestingModule } from '@nestjs/testing';
import { SubcategoririesResolver } from './subcategoriries.resolver';
import { SubcategoririesService } from './subcategoriries.service';

describe('SubcategoririesResolver', () => {
  let resolver: SubcategoririesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubcategoririesResolver, SubcategoririesService],
    }).compile();

    resolver = module.get<SubcategoririesResolver>(SubcategoririesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
