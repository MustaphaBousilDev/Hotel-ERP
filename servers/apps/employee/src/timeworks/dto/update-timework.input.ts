import { CreateTimeworkInput } from './create-timework.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTimeworkInput extends PartialType(CreateTimeworkInput) {
  @Field(() => Int)
  id: number;
}
