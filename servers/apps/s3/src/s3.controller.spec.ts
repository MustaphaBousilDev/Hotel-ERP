import { Test, TestingModule } from '@nestjs/testing';
import { S3Controller } from './s3.controller';
import { S3Service } from './s3.service';

describe('S3Controller', () => {
  let s3Controller: S3Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [S3Controller],
      providers: [S3Service],
    }).compile();

    s3Controller = app.get<S3Controller>(S3Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(s3Controller.getHello()).toBe('Hello World!');
    });
  });
});
