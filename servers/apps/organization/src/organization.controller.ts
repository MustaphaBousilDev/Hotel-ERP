import { Controller, Get } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { User as UserReservation } from './models/users.mysql.entity';
import { UserRepositorySQL } from './resources/users/users.repository';

@Controller()
export class OrganizationController {
  constructor(
    private readonly organizationService: OrganizationService,
    private readonly usersRepository: UserRepositorySQL,
  ) {}

  @Get()
  getHello(): string {
    return this.organizationService.getHello();
  }

  @MessagePattern('createUserOrg')
  async createUser(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(' ########################## success message org');
    console.log(' ########################## success  org');
    console.log(data);
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    //telling RabbitMQ that it has been successfully received and processed. This is important in message queue systems to prevent messages from being reprocessed in case of failures.
    channel.ack(originalMsg);
    const user = new UserReservation({
      ...data,
    });
    return this.usersRepository.create(user);
  }
}
