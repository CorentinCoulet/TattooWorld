import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme', // should be hashed in a real application
      roles: ['user'],
    },
    {
      userId: 2,
      username: 'maria',s
      password: 'guess',
      roles: ['admin'],
    },
  ];

  async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }
}
