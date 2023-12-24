import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  // Create an instance of the Nest application using the ReservationsModule
  const app = await NestFactory.create(ReservationsModule);
  // Apply a global validation pipe to the application for validation dto
  //#(whitelist: true)If set to true validator will strip validated object of any properties that do not have any decorators.
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // Use the Logger provided by the Nest application
  app.useLogger(app.get(Logger));
  // Start the application and make it listen on port 5000
  await app.listen(5000);
}
bootstrap();
