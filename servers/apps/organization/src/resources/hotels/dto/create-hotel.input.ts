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
export class CreateHotelInput {
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  name: string;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  address: string;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  phone: string;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  email: string;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  description: string;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  latitude: string;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  longitude: string;

  @IsBoolean()
  @Type(() => Boolean)
  @Field({ nullable: true })
  status: boolean;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  image: string;

  @Field(() => OrganizationIDInput)
  @IsNotEmpty()
  organization: OrganizationIDInput;

  @IsNumber()
  @Field(() => CityIDInput)
  city: CityIDInput;

  @Field(() => [DepartementIDDtoInput], { nullable: true })
  @IsOptional()
  departements: DepartementIDDtoInput[];
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
