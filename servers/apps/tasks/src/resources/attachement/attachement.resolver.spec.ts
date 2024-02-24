import { Test, TestingModule } from '@nestjs/testing';
import { AttachementResolver } from './attachement.resolver';
import { AttachementService } from './attachement.service';

describe('AttachementResolver', () => {
  let resolver: AttachementResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttachementResolver, AttachementService],
    }).compile();

    resolver = module.get<AttachementResolver>(AttachementResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
