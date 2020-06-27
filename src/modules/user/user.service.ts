import { Injectable, Logger } from '@nestjs/common';
import { User } from './user.model';
import { v1 as uuid } from 'uuid';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  users: User[] = [];
  logger = new Logger('UserService');
  constructor() {
    this.logger.log('UserService is up');
  }

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(payload: CreateUserDto): User {
    const { firstName, lastName, username, email, password } = payload;
    const user = {
      id: uuid(),
      firstName,
      username,
      lastName,
      password,
      email,
    };
    this.users.push(user);
    return user;
  }

  getUserById(userId: string): User {
    const user = this.users.find(u => u.id === userId);

    return user;
  }

  deleteUserById(userId: string): void {
    this.users = this.users.filter(u => u.id !== userId);
  }
}
