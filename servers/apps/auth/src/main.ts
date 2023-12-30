import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const configService = app.get(ConfigService);
  //transport protocol for communication microservices
  app.connectMicroservice({
    transport: Transport.TCP,
    //specify host and port that we want to be listening on for our TPC microservice
    options: {
      host: '0.0.0.0',
      port: configService.get('TCP_PORT_AUTH'),
    },
  });
  app.use(cookieParser());
  // Apply a global validation pipe to the application for validation dto
  //#(whitelist: true)If set to true validator will strip validated object of any properties that do not have any decorators.
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // Use the Logger provided by the Nest application
  app.useLogger(app.get(Logger));
  await app.startAllMicroservices();
  await app.listen(configService.get('HTTP_PORT_AUTH'));
}
bootstrap();
