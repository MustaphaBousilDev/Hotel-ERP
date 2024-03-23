import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateTagInput {
  @Field()
  @IsOptional()
  @IsString()
  name?: string;
}
