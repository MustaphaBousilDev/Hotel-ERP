import { Test, TestingModule } from '@nestjs/testing';
import { TimeworksResolver } from './timeworks.resolver';
import { TimeworksService } from './timeworks.service';

describe('TimeworksResolver', () => {
  let resolver: TimeworksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeworksResolver, TimeworksService],
    }).compile();

    resolver = module.get<TimeworksResolver>(TimeworksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
