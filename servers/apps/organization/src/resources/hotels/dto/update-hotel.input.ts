import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UpdateHotelInput {
  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  name?: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  @Field({ nullable: true })
  address?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  phone?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  email?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  description?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  latitude?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  longitude?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  @Field({ nullable: true })
  status?: boolean;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  image?: string;

  @Field(() => OrganizationIDInput, { nullable: true })
  @IsNotEmpty()
  organization?: OrganizationIDInput;

  @IsNumber()
  @Field(() => CityIDInput, { nullable: true })
  city?: CityIDInput;

  @Field(() => [DepartementIDDtoInput], { nullable: true })
  @IsOptional()
  departements?: DepartementIDDtoInput[];
}

@InputType()
export class CityIDInput {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}

@InputType()
export class OrganizationIDInput {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}

@InputType()
export class UserIDInput {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}

@InputType()
export class DepartementIDDtoInput {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}
