import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { Employee } from './models/employee.schema';
import { CurrentUser, User } from '@app/shared';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { EmployeeService } from './employee.service';
import { EmployeeDtoInput } from './dto/employee.input.dto';
import { EmployeeDtoUpdate } from './dto/employee.update.dto';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Mutation(() => Employee)
  createEmployee(
    @Args('createEmployeeInput')
    createEmployeeInput: EmployeeDtoInput,
    @CurrentUser() user: User,
  ) {
    return this.employeeService.create(createEmployeeInput, user);
  }

  @Mutation(() => Employee)
  updateEmployee(
    @Args('id') id: number,
    @Args('updateEmployeeInputs')
    updateEmployeeInput: EmployeeDtoUpdate,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.employeeService.update(id, updateEmployeeInput, user);
  }

  @Query(() => [Employee], { name: 'employees' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Query(() => Employee, { name: 'employee' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.employeeService.findOne(id);
  }

  @Mutation(() => Employee)
  async removeEmployee(@Args('id', { type: () => Number }) id: number) {
    console.log(id);
    await this.employeeService.remove(id);
    return { message: 'Suceess' };
  }
  @MessagePattern('createUserResr')
  createUser(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    //telling RabbitMQ that it has been successfully received and processed. This is important in message queue systems to prevent messages from being reprocessed in case of failures.
    channel.ack(originalMsg);
    console.log(data);
  }
}
