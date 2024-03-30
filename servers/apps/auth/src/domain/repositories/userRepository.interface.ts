import { UserM } from '../model/user';

export interface UserRepository {
  getUserByUsername(firstName: string): Promise<UserM>;
  updateLastLogin(username: string): Promise<void>;
  updateRefreshToken(username: string, refreshToken: string): Promise<void>;
}
