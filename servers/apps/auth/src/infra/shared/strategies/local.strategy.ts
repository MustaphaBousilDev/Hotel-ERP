import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { UsecasesProxyModule } from '../../usecases-proxy/usecases-proxy.module';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { LoginUseCases } from 'apps/auth/src/usecases/login.usecases';
import { LoggerService } from '../../logger/logger.service';
import { ExceptionsService } from '../../exceptions/exceptions.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(UsecasesProxyModule.LOGIN_USECASES_PROXY)
    private readonly loginUseCaseProxy: UseCaseProxy<LoginUseCases>,
    private readonly logger: LoggerService,
    private readonly exceptionService: ExceptionsService,
  ) {
    super();
  }

  async validate(userId: number, password: string) {
    if (!userId || !password) {
      this.logger.warn(
        'LocalStrategy',
        'Email or password is missing, BadRequestException',
      );
      this.exceptionService.UnauthorizedException();
    }
    const user = await this.loginUseCaseProxy
      .getInstance()
      .validateUserForLocalStragtegy(userId, password);
    if (!user) {
      this.logger.warn('LocalStrategy', `Invalid username or password`);
      this.exceptionService.UnauthorizedException({
        message: 'Invalid username or password.',
      });
    }
    return user;
  }
}
