import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
  @Post()
  createUser(@Body() payload: CreateUserDto): Promise<User> {
    return this.userService.createUser(payload);
  }

  @Get('/:id')
  getUserById(@Param('id') userId: string): Promise<User> {
    return this.userService.getUserById(userId);
  }

  @Delete('/:id')
  deletUserById(@Param('id') userId: string): void {
    this.userService.deleteUserById(userId);
  }
}
