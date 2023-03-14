import { User } from "Domain/entities/User";

export interface IUserRepository {
    getById(id: number): Promise<User | undefined>;
    getAll(): Promise<User[]>;
  }