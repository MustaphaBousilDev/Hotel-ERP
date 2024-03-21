import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSubcategoriryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
