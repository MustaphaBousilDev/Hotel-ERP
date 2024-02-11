import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { UserRepositorySQL } from './resources/users/users.repository';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { User as UserReservation } from './models/users.mysql.entity';
import { CurrentUser, JwtAuthGuard, Roles } from '@app/shared';
import { OrganizationInputDto } from './dto/organization.input.dto';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { UpdateOrganizationDto } from './dto/organization.update.dto';

@Controller('organization')
export class OrganizationController {
  constructor(
    private readonly organizationService: OrganizationService,
    private readonly usersRepository: UserRepositorySQL,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @Roles('Admin')
  async create(
    @Body() createOrganizationDto: OrganizationInputDto,
    @CurrentUser() user: UserInfoDto,
  ) {
    return this.organizationService.create(createOrganizationDto, user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.organizationService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: number | string,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    return this.organizationService.update(id, updateOrganizationDto);
  }

  @UseGuards()
  @Get(':id')
  async findOne(@Param('id') id: string | number) {
    return this.organizationService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string | number) {
    return this.organizationService.remove(id);
  }

  @MessagePattern('createUserOrg')
  async createUser(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(' ########################## success message org ');
    console.log(' ########################## success  orgs');
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
