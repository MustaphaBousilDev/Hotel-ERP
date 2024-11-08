import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from '@app/shared';
import { Response } from 'express';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @CurrentUser() user: UserInfoDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log('####------------------controller', user);
    const token = await this.authService.login(user, response);
    user['token'] = token;
    response.send(user);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern('authenticate')
  async authenticate(@Payload() data: any) {
    console.log('############################');
    console.log(data);
    return data.user;
  }

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }
}
