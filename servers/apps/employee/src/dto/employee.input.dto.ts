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
  @Field()
  dateOfBirth: Date;

  @IsDateString()
  @Field()
  dateOfHired: Date;

  @IsString()
  @Type(() => String)
  @Field()
  contactNumber: string;

  @IsString()
  @Type(() => String)
  @Field()
  email: string;

  @IsString()
  @Type(() => String)
  @Field()
  address: string;

  @IsString()
  @Type(() => Number)
  @Field()
  salary: number;

  @IsString()
  @Type(() => String)
  @Field()
  superVisorID: string;

  @IsBoolean()
  @Type(() => Boolean)
  @Field()
  isActivate: boolean;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  image: string;

  @Field(() => DepartementIDDtoInput)
  departement: DepartementIDDtoInput;

  @Field(() => PositionIDDtoInput)
  position: PositionIDDtoInput;

  @Field(() => TimeWorkIDDtoInput)
  timeWork: TimeWorkIDDtoInput;
}

@InputType()
export class EmployeeIDDtoInput {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}
