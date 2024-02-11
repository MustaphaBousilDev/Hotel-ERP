import { Module } from '@nestjs/common';
import { S3Controller } from './s3.controller';
import { S3Service } from './s3.service';
// import { ConfigService } from '@nestjs/config';
// import { APP_GUARD } from '@nestjs/core';
// import {
//   ThrottlerGuard,
//   ThrottlerModule,
//   ThrottlerModuleOptions,
// } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // ThrottlerModule.forRootAsync({
    //   useFactory: (configService: ConfigService): ThrottlerModuleOptions => ({
    //     throttlers: {
    //       limit: configService.getOrThrow<number>('UPLOAD_RATE_LIMIT'),
    //       ttl: configService.getOrThrow<number>('UPLOAD_RATE_TTL'),
    //     },
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [S3Controller],
  providers: [
    S3Service,
    // {
    //   provide: APP_GUARD,
    //   useClass: ThrottlerGuard,
    // }
  ],
})
export class S3Module {}
