import { IsAuthenticatedUseCases } from '../isAuthenticated.usecases';
import { UserRepository } from '../../domain/repositories/userRepository.interface';
import { UserM } from '../../domain/model/user';

describe('useCases Authentication', () => {
  let isAuthenticated: IsAuthenticatedUseCases;
  let adminUserRepo: UserRepository;
  beforeEach(() => {
    adminUserRepo = {} as UserRepository;
    adminUserRepo.getUserByUsername = jest.fn();
    isAuthenticated = new IsAuthenticatedUseCases(adminUserRepo);
  });
  describe('isAuthenticated', () => {
    it('should return an array to invalid the cookie', async () => {
      const user: UserM = {
        id: 1,
        firstName: 'username',
        lastName: 'lastName',
        password: 'password',
        email: 'err@gmail.com',
        roles: 'Admin',
      };
      (adminUserRepo.getUserByUsername as jest.Mock).mockReturnValue(
        Promise.resolve(user),
      );

      const { password, ...rest } = user;
      console.log(password);

      expect(await isAuthenticated.execute(user.firstName)).toEqual(rest);
    });
  });
});
