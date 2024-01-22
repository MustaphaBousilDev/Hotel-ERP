import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../../entities/user.entity';

if (process.env.NODE_ENV === 'local') {
  dotenv.config({ path: './env/local.env' });
}

const config: ConnectionOptions = {
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
  synchronize: true,
  ssl: true,
  // schema: process.env.DATABASE_SCHEMA,
  // cli: {
  //   migrationsDir: 'database/migrations',
  // },
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};

console.log(config);

export default config;
