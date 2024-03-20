import {
  IsEmail,
  IsString,
  Validate,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsPhoneNumber } from '@app/shared';

@InputType() // for graphql shema when i create or update
export class OrganizationUpdateDto {
  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  name?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  @Validate(IsPhoneNumber)
  phone1?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  @Validate(IsPhoneNumber)
  phone2?: string;

  @IsOptional()
  @IsEmail()
  @Type(() => String)
  @Field({ nullable: true })
  email?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  website?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  @Field({ nullable: true })
  description?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  logo?: string;
}
