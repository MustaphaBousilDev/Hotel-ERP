import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateBrandInput {
  @Field()
  @IsOptional()
  @IsString()
  name?: string;

  @Field()
  @IsOptional()
  @IsBoolean()
  status?: boolean;

  @Field()
  @IsOptional()
  @IsString()
  image?: string;
}
