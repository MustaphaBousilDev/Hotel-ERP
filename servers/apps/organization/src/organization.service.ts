import { Injectable } from '@nestjs/common';
import { OrganizationRepositorymySQL } from './organization.repository';
import { OrganizationInputDto } from './dto/organization.input.dto';
import { UserInfoDto } from '@app/shared/dto/userInfo.dto';
import { Organization } from './models/organization.schema';
import { UpdateOrganizationDto } from './dto/organization.update.dto';

@Injectable()
export class OrganizationService {
  constructor(
    private readonly organizationRepository: OrganizationRepositorymySQL,
  ) {}

  async create(
    createOrganizationDto: OrganizationInputDto,
    { _id: userId }: UserInfoDto,
  ) {
    /*const organization = new Organization({
      ...createOrganizationDto,
      user_id: userId,
    });
    return this.organizationRepository.create(organization);*/
  }

  async findAll() {
    //return this.organizationRepository.findOne({});
  }

  async findOne(_id: any) {
    //return this.organizationRepository.findOne({ _id });
  }

  async update(_id: any, updateOrganization: UpdateOrganizationDto) {
    /*return this.organizationRepository.findOneAndUpdate(
      { _id },
      updateOrganization,
    );*/
  }

  async remove(_id: any) {
    /*console.log('############# coming to here');
    console.log(_id);
    await this.organizationRepository.findOneAndDelete({ _id });
    return { message: 'Success Delete Organization' };*/
  }
}
