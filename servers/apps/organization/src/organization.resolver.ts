import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { Organization } from './models/organization.schema';
import { OrganizationService } from './organization.service';
import { OrganizationInputDto } from './dto/organization.input.dto';
import { CurrentUser, User } from '@app/shared';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';

@Resolver(() => Organization)
export class OrganizationResolver {
  constructor(private readonly organizationService: OrganizationService) {}

  @Mutation(() => Organization)
  createOrganization(
    @Args('createOrganizationInput')
    createOrganizationInput: OrganizationInputDto,
    @CurrentUser() user: User,
  ) {
    return this.organizationService.create(createOrganizationInput, user);
  }

  @Mutation(() => Organization)
  updateOrganization(
    @Args('id') id: number,
    @Args('updateOrganizationInputs')
    updateOrganizationInput: OrganizationInputDto,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.organizationService.update(id, updateOrganizationInput, user);
  }

  @Query(() => [Organization], { name: 'organizations' })
  findAll() {
    return this.organizationService.findAll();
  }

  @Query(() => Organization, { name: 'organization' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.organizationService.findOne(id);
  }

  @Mutation(() => Organization)
  async removeOrganization(@Args('id', { type: () => Number }) id: number) {
    console.log(id);
    await this.organizationService.remove(id);
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
