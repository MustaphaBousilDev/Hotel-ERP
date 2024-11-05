import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../domain/repositories/userRepository.interface';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserM } from '../../domain/model/user';

@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userEntityRepository: Repository<User>,
  ) {}

  async updateRefreshToken(
    userId: number,
    refreshToken: string,
  ): Promise<void> {
    await this.userEntityRepository.update(
      {
        id: userId,
      },
      {
        hach_refresh_token: refreshToken,
      },
    );
  }
  async getUserByUsername(userId: number): Promise<UserM> {
    const adminUserEntity = await this.userEntityRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (!adminUserEntity) {
      return null;
    }
    return this.toUser(adminUserEntity);
  }

  async updateLastLogin(userId: number): Promise<void> {
    await this.userEntityRepository.update(
      {
        id: userId,
      },
      {
        last_login: () => 'CURRENT_TIMESTAMP',
      },
    );
  }

  private toUser(adminUserEntity: User): UserM {
    const adminUser: UserM = new UserM();

    adminUser.id = adminUserEntity.id;
    adminUser.firstName = adminUserEntity.firstName;
    adminUser.lastName = adminUserEntity.lastName;
    adminUser.email = adminUserEntity.email;
    adminUser.password = adminUserEntity.password;
    adminUser.createDate = adminUserEntity.createdate;
    adminUser.updatedDate = adminUserEntity.updateddate;
    adminUser.lastLogin = adminUserEntity.last_login;
    adminUser.hashRefreshToken = adminUserEntity.hach_refresh_token;

    return adminUser;
  }
}
