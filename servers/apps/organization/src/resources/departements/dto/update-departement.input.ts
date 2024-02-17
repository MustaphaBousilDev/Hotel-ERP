import { CreateDepartementInput } from './create-departement.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDepartementInput extends PartialType(
  CreateDepartementInput,
) {
  @Field(() => Int)
  id: number;
}
