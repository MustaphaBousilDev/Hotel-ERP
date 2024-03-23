import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateSupplierInput {
  @Field()
  @IsOptional()
  @IsString()
  name?: string;

  @Field()
  @IsOptional()
  @IsString()
  contactInfo?: string;
}

@InputType()
export class SupplierIDDtoInput {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}
