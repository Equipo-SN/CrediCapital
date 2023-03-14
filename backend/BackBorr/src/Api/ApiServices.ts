import { IUserRepository } from 'Domain/repositories/IUserRepository';
import { GetAllUsers } from '../Application/features/users/queries/GetAllUsers';
import { UserRepository } from '../Persistence/repositories/UserRepository';
import { Container } from './Container';
import { GetAllUsersController } from './controllers/GetAllUsersController';

export const container = new Container();

container.register('GetAllUsersController', GetAllUsersController);

container.register('GetAllUsers', GetAllUsers);
container.register<IUserRepository>('UserRepository', UserRepository);
