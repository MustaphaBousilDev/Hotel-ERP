import { Test, TestingModule } from '@nestjs/testing';
import { CleanArchitectController } from './clean-architect.controller';
import { CleanArchitectService } from './clean-architect.service';

describe('CleanArchitectController', () => {
  let cleanArchitectController: CleanArchitectController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CleanArchitectController],
      providers: [CleanArchitectService],
    }).compile();

    cleanArchitectController = app.get<CleanArchitectController>(CleanArchitectController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cleanArchitectController.getHello()).toBe('Hello World!');
    });
  });
});
