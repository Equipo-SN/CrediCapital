import { User } from 'Domain/entities/User';
import { IUserRepository } from 'Domain/repositories/IUserRepository';

export class GetAllUsers {

	constructor(private userRepository: IUserRepository) {
	}

	async handle(): Promise<User[]> {
		return await this.userRepository.getAll();
	}
}
