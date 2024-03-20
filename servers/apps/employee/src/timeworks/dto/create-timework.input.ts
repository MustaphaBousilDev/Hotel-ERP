import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTimeworkInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

@InputType()
export class TimeWorkIDDtoInput {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}
