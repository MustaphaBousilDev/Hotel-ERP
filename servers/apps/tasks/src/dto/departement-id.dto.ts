import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DepartementIDDtoInput {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}