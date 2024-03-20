import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdatePositionInput {
  @IsOptional()
  @Field(() => String, { description: 'Example field (placeholder)' })
  @IsString()
  name?: string;

  @IsOptional()
  @Field(() => Boolean, { description: 'status of position work' })
  @IsBoolean()
  status?: boolean;
}
