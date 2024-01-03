import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';

export const getTypeOrmModuleOptions = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions =>
  ({
    type: 'postgres',
    // host: config.getDatabaseHost(),
    // port: config.getDatabasePort(),
    // username: config.getDatabaseUser(),
    // password: config.getDatabasePassword(),
    // database: config.getDatabaseName(),
    // entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    // synchronize: false,
    // schema: process.env.DATABASE_SCHEMA,
    // migrationsRun: true,
    // migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    // cli: {
    //   migrationsDir: 'src/migrations',
    // },
    // ssl: {
    //   rejectUnauthorized: false,
    // },
    host: 'localhost',
    // port: parseInt(process.env.DATABASE_PORT),
    port: 5432,
    // username: process.env.DATABASE_USER,
    username: 'postgres',
    // password: process.env.DATABASE_PASSWORD,
    password: '',
    // database: process.env.DATABASE_NAME,
    database: 'clean-architect',
    // entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    entities: [__dirname + '../../**/*.entity{.ts,.js}'],
    synchronize: false,
    // schema: process.env.DATABASE_SCHEMA,
    migrationsRun: true,
    migrationsTableName: 'migration_todo',
    migrations: ['database/migrations/**/*{.ts,.js}'],
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
