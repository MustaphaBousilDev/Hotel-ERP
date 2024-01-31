import { Test, TestingModule } from '@nestjs/testing';
import { WifiResolver } from './wifi.resolver';
import { WifiService } from './wifi.service';

describe('WifiResolver', () => {
  let resolver: WifiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WifiResolver, WifiService],
    }).compile();

    resolver = module.get<WifiResolver>(WifiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
