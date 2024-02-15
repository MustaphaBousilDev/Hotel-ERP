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
import { NotFoundException } from '@nestjs/common';

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
    @CurrentUser() user: User,
  ) {
    //check if organization exists
    // const existingOrganization =
    //   await this.organizationService.findOne(organizationId);
    // if (!existingOrganization) {
    //   throw new NotFoundException('Organization not found');
    // }
    return this.organizationService.update(id, updateOrganizationInput);
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
  removeOrganization(@Args('id', { type: () => Number }) id: number) {
    return this.organizationService.remove(id);
  }
  @MessagePattern('createUserResr')
  createUser(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(' ########################## success message ');
    console.log(' ########################## success  ');
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    //telling RabbitMQ that it has been successfully received and processed. This is important in message queue systems to prevent messages from being reprocessed in case of failures.
    channel.ack(originalMsg);
    console.log(data);
  }
}