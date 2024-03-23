import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateCategoryInput {
  @Field()
  @IsOptional()
  @IsString()
  name?: string;

  @Field()
  @IsOptional()
  @IsBoolean()
  status?: boolean;

  @IsOptional()
  @Field()
  @IsString()
  image?: string;
}
