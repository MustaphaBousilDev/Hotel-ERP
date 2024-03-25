import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateTagInput {
  @Field()
  @IsOptional()
  @IsString()
  name?: string;
}
