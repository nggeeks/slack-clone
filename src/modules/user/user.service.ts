import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  users: User[] = [];
  logger = new Logger('UserService');
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    this.logger.log('UserService is up');
  }

  async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  createUser(payload: CreateUserDto): Promise<User> {
    return this.usersRepository.save(payload);
  }

  async getUserById(userId: string): Promise<User> {
    return await this.usersRepository.findOne(userId);
  }

  deleteUserById(userId: string): void {
    this.usersRepository.delete(userId);
  }
}
