import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { HotelIDDtoInput } from '../../hotels/dto/create-hotel.input';

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
  @Field(() => HotelIDDtoInput)
  hotel?: HotelIDDtoInput;
}
