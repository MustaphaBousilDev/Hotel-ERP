import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { CleanArchitectModule } from './clean-architect.module';

async function bootstrap() {
  const app = await NestFactory.create(CleanArchitectModule);
  app.use(cookieParser());
  // pipes
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
