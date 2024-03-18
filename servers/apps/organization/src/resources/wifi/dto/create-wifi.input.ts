import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateWifiInput {
  @IsString()
  @Type(() => String)
  @Field()
  name: string;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  ip: string;

  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  password: string;

  @Field(() => HotelIDInputForWifi)
  hotel: HotelIDInputForWifi;
}

@InputType()
export class UserIDInputForWifi {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}

@InputType()
export class HotelIDInputForWifi {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}
