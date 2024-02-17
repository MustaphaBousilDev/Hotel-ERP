import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateDepartementInput {
  @IsString()
  @Type(() => String)
  @Field()
  name: string;

  @IsString()
  @Type(() => String)
  @Field()
  description: string;

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
  hotel_id: number;
}
