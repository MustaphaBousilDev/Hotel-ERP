import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Gender } from '../models/employee.schema';
import { DepartementIDDtoInput } from './remote/departement.dto';
import { PositionIDDtoInput } from '../positions/dto/create-position.input';
import { TimeWorkIDDtoInput } from '../timeworks/dto/create-timework.input';

@InputType()
export class EmployeeDtoInput {
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  firstName: string;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  lastName: string;

  @IsEnum(Gender)
  @Type(() => String)
  @Field(() => Gender, { nullable: true })
  gender: Gender;

  @IsDateString()
  @Field({ nullable: true })
  dateOfBirth: Date;

  @IsDateString()
  @Field({ nullable: true })
  dateOfHired: Date;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  contactNumber: string;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  email: string;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  address: string;

  @IsString()
  @Type(() => Number)
  @Field({ nullable: true })
  salary: number;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  superVisorID: string;

  @IsBoolean()
  @Type(() => Boolean)
  @Field({ nullable: true })
  isActivate: boolean;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  image: string;

  @Field(() => [], { nullable: true })
  @IsOptional()
  departement: DepartementIDDtoInput;

  @Field(() => PositionIDDtoInput, { nullable: true })
  @IsOptional()
  position: PositionIDDtoInput;

  @Field(() => TimeWorkIDDtoInput, { nullable: true })
  @IsOptional()
  timeWork: TimeWorkIDDtoInput;
}

@InputType()
export class EmployeeIDDtoInput {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}
