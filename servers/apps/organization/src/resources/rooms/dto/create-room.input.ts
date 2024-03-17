import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateRoomInput {
  @IsNumber()
  @Type(() => Number)
  @Field()
  roomNumber: number;

  @IsString()
  @Type(() => String)
  @Field()
  type: string;

  @IsString()
  @Type(() => String)
  @Field()
  description: string;

  @IsString()
  @Type(() => String)
  @Field()
  image: string;

  @IsBoolean()
  @Type(() => Boolean)
  @Field()
  isAvailable: boolean;

  @IsNumber()
  @Type(() => Number)
  @Field()
  price: number;

  @Field(() => HotelIDDtoInputForRoom)
  hotel: HotelIDDtoInputForRoom;
}

@InputType()
export class UserIDDtoInputForRoom {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}

@InputType()
export class HotelIDDtoInputForRoom {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}
