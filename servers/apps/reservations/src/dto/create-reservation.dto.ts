import { CreateChargeDto } from '@app/shared';
import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  // IsNotEmpty,
  // IsNotEmpty,
  IsNotEmptyObject,
  // IsString,
  // IsNumber,
  // IsString,
  ValidateNested,
} from 'class-validator';
@InputType() // for graphql shema when i create or update
export class CreateReservationDto {
  @IsDate()
  @Type(() => Date)
  @Field()
  startDate: Date;
  @IsDate()
  @Type(() => Date)
  @Field()
  endDate: Date;
  // @IsString()
  // @IsNotEmpty()
  // placeId: string;
  // @IsString()
  // @IsNotEmpty()
  // invoiceId: string;

  // @IsDefined()
  // @IsNotEmptyObject()
  // @ValidateNested()
  // @Type(() => CardDto)
  // card: CardDto;

  // @IsNumber()
  // amount: number;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateChargeDto)
  @Field(() => CreateChargeDto)
  charge: CreateChargeDto;
}
