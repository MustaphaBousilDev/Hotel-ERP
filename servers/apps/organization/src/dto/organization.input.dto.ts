import {
  IsEmail,
  IsString,
  Validate,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsPhoneNumber } from '@app/shared';

@InputType() // for graphql shema when i create or update
export class OrganizationInputDto {
  @IsString()
  @Type(() => String)
  @Field()
  name: string;

  @IsString()
  @Type(() => String)
  @Field()
  @Validate(IsPhoneNumber)
  phone1: string;

  @IsString()
  @Type(() => String)
  @Field()
  @Validate(IsPhoneNumber)
  phone2: string;

  @IsEmail()
  @Type(() => String)
  @Field()
  email: string;

  @IsString()
  @Type(() => String)
  @Field()
  website: string;

  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  @Field()
  description: string;

  @IsString()
  @Type(() => String)
  @Field()
  logo: string;

  @IsNumber()
  @Type(() => Number)
  @Field()
  user_id: number;
}
