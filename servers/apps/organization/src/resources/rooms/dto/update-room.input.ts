import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  /*IsNotEmpty*/
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { HotelIDDtoInput } from '../../hotels/dto/create-hotel.input';

@InputType()
export class UpdateRoomInput {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Field()
  roomNumber?: number;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field()
  type?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field()
  description?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field()
  image?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  @Field()
  isAvailable?: boolean;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Field()
  price?: number;

  @IsOptional()
  @Field(() => HotelIDDtoInput)
  hotel?: HotelIDDtoInput;
}
