import { Injectable } from '@nestjs/common';
import {
  OrganizationRepositorymySQL,
  UserRepositorySQL,
} from './organization.repository';
import { OrganizationInputDto } from './dto/organization.input.dto';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { Organization } from './models/organization.schema';
import { OrganizationUpdateDto } from './dto/organization.update.dto';

@Injectable()
export class OrganizationService {
  constructor(
    private readonly organizationRepository: OrganizationRepositorymySQL,
    private readonly userRepositorySQL: UserRepositorySQL,
  ) {}

  async create(
    createOrganizationDto: OrganizationInputDto,
    { _id: userId }: UserInfoDto,
  ) {
    const user = await this.userRepositorySQL.findOne({
      _id: userId,
    });
    if (user) {
      const organization = new Organization({
        ...createOrganizationDto,
        user: user,
      });
      this.organizationRepository.create(organization);
    }
  }

  async findAll() {
    return this.organizationRepository.findOne({});
  }

  async findOne(_id: any) {
    return this.organizationRepository.findOne({ _id });
  }

  async update(
    _id: any,
    updateOrganization: OrganizationUpdateDto,
    { _id: user_id }: UserInfoDto,
  ) {
    const user = await this.userRepositorySQL.findOne({
      _id: user_id,
    });
    if (user) {
      updateOrganization['user'] = user;
      return this.organizationRepository.findOneAndUpdate(
        { _id },
        updateOrganization,
      );
    }
  }

  async remove(_id: any) {
    console.log('############# coming to here');
    console.log(_id);
    await this.organizationRepository.findOneAndDelete({ _id });
    return { message: 'Success Delete Organization' };
  }
}
