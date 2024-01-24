import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '@app/shared';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './interfaces/token-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async login(user: User, response: Response) {
    const tokenPayload: TokenPayload = {
      userId: user._id,
    };
    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );
    const token = this.jwtService.sign(tokenPayload);
    console.log('token', token);
    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });
  }
}
