import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateHotelInput {
  @IsString()
  @Type(() => String)
  @Field()
  name: string;

  @IsString()
  @Type(() => String)
  @Field()
  address: string;

  @IsString()
  @Type(() => String)
  @Field()
  phone: string;

  @IsString()
  @Type(() => String)
  @Field()
  email: string;

  @IsString()
  @Type(() => String)
  @Field()
  description: string;

  @IsString()
  @Type(() => String)
  @Field()
  latitude: string;

  @IsString()
  @Type(() => String)
  @Field()
  longitude: string;

  @IsBoolean()
  @Type(() => Boolean)
  @Field()
  status: boolean;

  @IsString()
  @Type(() => String)
  @Field()
  image: string;

  @IsNumber()
  @Type(() => Number)
  @Field()
  organization_id: number;

  @IsNumber()
  @Type(() => Number)
  @Field()
  city_id: number;
}
