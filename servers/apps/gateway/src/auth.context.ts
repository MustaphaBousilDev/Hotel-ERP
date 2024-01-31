import { AUTH_SERVICE } from '@app/shared';
import { ClientProxy } from '@nestjs/microservices';
import { app } from './app';
import { UnauthorizedException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

export const authContext = async ({ req }) => {
  try {
    const authClient = app.get<ClientProxy>(AUTH_SERVICE);
    const user = await lastValueFrom(
      authClient.send('authenticate', {
        Authentication: req.headers?.authentication,
      }),
    );
    return { user };
  } catch (err) {
    throw new UnauthorizedException(err);
  }
};