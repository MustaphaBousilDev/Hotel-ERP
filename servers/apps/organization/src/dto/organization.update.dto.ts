import { PartialType } from '@nestjs/mapped-types';
import { OrganizationInputDto } from './organization.input.dto';

export class UpdateOrganizationDto extends PartialType(OrganizationInputDto) {}
