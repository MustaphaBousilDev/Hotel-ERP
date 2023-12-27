import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.use(cookieParser());
  // Apply a global validation pipe to the application for validation dto
  //#(whitelist: true)If set to true validator will strip validated object of any properties that do not have any decorators.
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // Use the Logger provided by the Nest application
  app.useLogger(app.get(Logger));
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT_AUTH'));
}
bootstrap();
