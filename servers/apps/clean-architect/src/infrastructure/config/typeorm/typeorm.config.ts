import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'local') {
  dotenv.config({ path: './env/local.env' });
}

const config: ConnectionOptions = {
  type: 'postgres',
  //host: process.env.DATABASE_HOST,
  host: 'localhost',
  // port: parseInt(process.env.DATABASE_PORT),
  port: 5432,
  // username: process.env.DATABASE_USER,
  username: 'postgres',
  // password: process.env.DATABASE_PASSWORD,
  password: 'mugiwara1032',
  // database: process.env.DATABASE_NAME,
  database: 'clean-architect',
  // entities: [__dirname + './../../**/*.entity{.ts,.js}'],
  entities: [__dirname + '../../**/*.entity{.ts,.js}'],
  synchronize: false,
  // schema: process.env.DATABASE_SCHEMA,
  migrationsRun: true,
  migrationsTableName: 'migration_todo',
  migrations: ['database/migrations/**/*{.ts,.js}'],
  // cli: {
  //   migrationsDir: 'database/migrations',
  // },
  ssl: {
    rejectUnauthorized: false,
  },
};

console.log(config);

export default config;
