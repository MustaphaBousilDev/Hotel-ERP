import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

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

  @IsNumber()
  @Type(() => Number)
  @Field()
  user_id: number;

  @IsNumber()
  @Type(() => Number)
  @Field()
  hotel_id: number;
}
