import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '@app/shared';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LoginDto } from '@app/shared/dto/login.dto';
import { Res, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Mutation(() => User)
  async login(
    @Args('loginUserInput')
    user: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.authService.login(user, response);
    response.send(user);
  }
}
