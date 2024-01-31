import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateWifiInput {
  @IsString()
  @Type(() => String)
  @Field()
  name: string;

  @IsString()
  @Type(() => String)
  @Field()
  ip: string;

  @IsString()
  @Type(() => String)
  @Field()
  password: string;

  @IsNumber()
  @Type(() => Number)
  @Field()
  user_id: string;

  @IsNumber()
  @Type(() => Number)
  @Field()
  hotel_id: number;
}
