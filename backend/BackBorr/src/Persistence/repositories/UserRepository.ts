import { User } from "Domain/entities/User";
import { IUserRepository } from "Domain/repositories/IUserRepository";

export class UserRepository implements IUserRepository {
    private users: User[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Mary' },
      { id: 3, name: 'Bob' },
    ];
  
    public async getById(id: number): Promise<User | undefined> {
      return this.users.find(u => u.id === id);
    }
  
    public async getAll(): Promise<User[]> {
      return this.users;
    }
  }