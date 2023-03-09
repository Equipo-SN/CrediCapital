import { DataSource } from 'typeorm';
import { BorrowerMetadata } from '../../../typeorm/daos/borrower';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgre',
  password: 'test',
  database: 'credicapital_borrower',
  synchronize: true,
  logging: true,
  entities: [BorrowerMetadata],
  subscribers: [],
  migrations: [],
});
