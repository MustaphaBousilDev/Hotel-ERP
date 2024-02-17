import { Test, TestingModule } from '@nestjs/testing';
import { RoomResolver } from './departement.resolver';
import { RoomService } from './departement.service';

describe('RoomResolver', () => {
  let resolver: RoomResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomResolver, RoomService],
    }).compile();

    resolver = module.get<RoomResolver>(RoomResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
