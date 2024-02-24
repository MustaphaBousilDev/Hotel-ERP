import { Test, TestingModule } from '@nestjs/testing';
import { HisytoryResolver } from './hisytory.resolver';
import { HisytoryService } from './hisytory.service';

describe('HisytoryResolver', () => {
  let resolver: HisytoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HisytoryResolver, HisytoryService],
    }).compile();

    resolver = module.get<HisytoryResolver>(HisytoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
