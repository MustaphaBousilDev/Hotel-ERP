import { CreateChargeDto } from '@app/shared';
import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNotEmpty,
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

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateChargeDto)
  @Field(() => CreateChargeDto)
  charge: CreateChargeDto;

  @Field(() => UserIDInputForReservation)
  user: UserIDInputForReservation;

  @Field(() => RoomIDInputForReservation)
  room: RoomIDInputForReservation;

  @Field(() => HotelIDInputForReservation)
  hotel: HotelIDInputForReservation;
}

@InputType()
export class UserIDInputForReservation {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}

@InputType()
export class RoomIDInputForReservation {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}

@InputType()
export class HotelIDInputForReservation {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}
