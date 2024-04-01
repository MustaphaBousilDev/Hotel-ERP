import { UserM } from '../model/user';

export interface UserRepository {
  getUserByUsername(firstName: string): Promise<UserM>;
  updateLastLogin(userId: number): Promise<void>;
  updateRefreshToken(userId: number, refreshToken: string): Promise<void>;
}
