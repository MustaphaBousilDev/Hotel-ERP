import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      //imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.getOrThrow('MYSQL_HOST'),
        port: +configService.getOrThrow('MYSQL_PORT'),
        database: configService.getOrThrow('MYSQL_DATABASE'),
        username: configService.getOrThrow('MYSQL_USERNAME'),
        password: configService.getOrThrow('MYSQL_PASSWORD'),
        synchronize: configService.getOrThrow('MYSQL_SYNCHRONIZE'), //synchronize not for production
        autoLoadEntities: true,
        // ssl: true,
      }),
      inject: [ConfigService], // Specify the dependencies that should be injected into the useFactory function
    }),
  ],
})
export class DatabaseModulemySQL {
  static forFeature(models: EntityClassOrSchema[]) {
    return TypeOrmModule.forFeature(models);
  }
  /**
   * When you use MongooseModule.forFeature(models) within a NestJS module, you are telling NestJS that this module will use Mongoose and will work with the specified Mongoose models.
   * @Module({
      imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),(say module in reservations services)
      ],
      controllers: [UserController],
      providers: [UserService],
    })
   */
}
