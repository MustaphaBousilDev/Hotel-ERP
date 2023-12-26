import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    return this.usersRepository.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
      timestamp: new Date(),
    });
  }
  async verifyUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email });
    console.log(user);
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      throw new UnauthorizedException('Invalid credentialss');
    }
    console.log('-----------------------------------------------------\n');
    console.log('--------------------------verify user \n');
    console.log('-----------------------------------------------------\n');
    //user.password = 'bitch local strategy';
    return user;
  }
}
