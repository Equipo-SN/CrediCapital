import { BorrowerEntity } from '../../../../Persistence/entities/BorrowerEntity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgre',
  password: 'test',
  database: 'credicapital_borrower',
  synchronize: true,
  logging: true,
  entities: [BorrowerEntity],
  subscribers: [],
  migrations: [],
});
