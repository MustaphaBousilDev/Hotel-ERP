import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateWifiInput {
  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field()
  name?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  ip?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  password?: string;

  @IsOptional()
  @Field(() => HotelIDInputForWifi)
  hotel?: HotelIDInputForWifi;
}

@InputType()
export class HotelIDInputForWifi {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}
