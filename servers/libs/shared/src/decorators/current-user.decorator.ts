import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';

const getCurrentUserByContext = (context: ExecutionContext): LoginDto => {
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest().user;
  }
  //cotext coming from graphQL
  const user = context.getArgs()[2]?.req.headers?.user;
  if (user) {
    return JSON.parse(user);
  }
};
export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
