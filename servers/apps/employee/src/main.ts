import { NestFactory } from '@nestjs/core';
import { EmployeeModule } from './employee.module';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(EmployeeModule);
  app.use(bodyParser.urlencoded({ extended: true }));
  const configService = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [configService.getOrThrow('RABBITMQ_URI')],
      queue: 'employee',
    },
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
  await app.startAllMicroservices();
  app.use(cookieParser());
  await app.listen(configService.get('PORT'));
}
bootstrap();
