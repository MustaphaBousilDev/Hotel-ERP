import { Controller } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { UserRepositorymySQL } from './employee.repository';
import { UserEMP } from './models/users.schema';
@Controller()
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly userRepository: UserRepositorymySQL,
  ) {}
  @MessagePattern('createUserComminicate')
  async createUser(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(' ########################## success message from employee ');
    console.log(' ########################## success  ');
    console.log(data);
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    //telling RabbitMQ that it has been successfully received and processed. This is important in message queue systems to prevent messages from being reprocessed in case of failures.
    channel.ack(originalMsg);
    const user = new UserEMP({
      ...data,
    });
    return this.userRepository.create(user);
  }
}
