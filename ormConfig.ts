import { User } from './src/modules/user/user.entity';
import { ConnectionOptions } from 'typeorm';

export const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'slack',
  entities: [User],
  synchronize: true,
};
