import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateDepartementInput {
  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field()
  name?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field()
  description?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  @Field()
  status?: boolean;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Field()
  image?: string;
}
