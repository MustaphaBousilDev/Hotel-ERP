import { NestFactory } from '@nestjs/core';
import { PaymentsModule } from './payments.module';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(PaymentsModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      // urls: [configService.getOrThrow('RABBITMQ_URI')],
      // //actual name of the queu that were going to be using in this service
      // noAck: false,
      // queue: 'payments',
      host: '0.0.0.0',
      port: configService.get('HTTP_PORT_PAYMENT'),
    },
  });
  app.useLogger(app.get(Logger));
  await app.startAllMicroservices();
}
bootstrap();
