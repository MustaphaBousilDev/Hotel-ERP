import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';
import { User } from '../../entities/user.entity';
export const getTypeOrmModuleOptions = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions =>
  ({
    type: 'mysql',
    //host: process.env.DATABASE_HOST,
    host: 'localhost',
    // port: parseInt(process.env.DATABASE_PORT),
    port: 3306,
    // username: process.env.DATABASE_USER,
    username: 'root',
    // password: process.env.DATABASE_PASSWORD,
    password: '',
    // database: process.env.DATABASE_NAME,
    database: 'erp_hotel_mugiwara',
    // entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    entities: [User],
    synchronize: false,
    // schema: process.env.DATABASE_SCHEMA,
    // cli: {
    //   migrationsDir: 'database/migrations',
    // },
    ssl: {
      rejectUnauthorized: false,
    },
    //host: 'localhost',
    // port: parseInt(process.env.DATABASE_PORT),
    // port: 5432,
    // username: process.env.DATABASE_USER,
    // username: 'postgres',
    // // password: process.env.DATABASE_PASSWORD,
    // password: '',
    // // database: process.env.DATABASE_NAME,
    // database: 'clean-architect',
    // entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    // entities: [__dirname + '../../**/*.entity{.ts,.js}'],
    // synchronize: false,
    // // schema: process.env.DATABASE_SCHEMA,
    // migrationsRun: true,
    // migrationsTableName: 'migration_todo',
    // migrations: ['database/migrations/**/*{.ts,.js}'],
  } as TypeOrmModuleOptions);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule {}
