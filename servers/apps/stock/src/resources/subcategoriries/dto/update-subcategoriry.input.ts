import { CreateSubcategoriryInput } from './create-subcategoriry.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubcategoriryInput extends PartialType(CreateSubcategoriryInput) {
  @Field(() => Int)
  id: number;
}
