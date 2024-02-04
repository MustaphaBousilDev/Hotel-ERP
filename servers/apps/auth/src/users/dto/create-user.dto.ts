import {
  IsEmail,
  IsStrongPassword,
  IsOptional,
  IsArray,
} from 'class-validator';
import { RoleDto } from './role.dto';
import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType() // for graphql shema when i create or update
export class CreateUserDto {
  @IsEmail()
  @Type(() => String)
  @Field()
  email: string;

  @IsStrongPassword()
  @Type(() => String)
  @Field()
  password: string;

  @IsOptional()
  @IsArray()
  @Type(() => Array)
  @Field(() => [String], { nullable: true })
  roles?: RoleDto[];
}
