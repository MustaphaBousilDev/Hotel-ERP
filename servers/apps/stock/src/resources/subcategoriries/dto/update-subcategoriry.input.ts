import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CategoryInputID } from '../../categories/dto/create-category.input';

@InputType()
export class UpdateSubcategoriryInput {
  @Field()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @Field()
  @IsBoolean()
  status?: boolean;

  @IsOptional()
  @Field()
  @IsString()
  image?: string;

  @IsOptional()
  @Field(() => CategoryInputID)
  @IsNotEmpty()
  category?: CategoryInputID;
}
