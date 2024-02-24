import { CreateTaskstypeInput } from './create-taskstype.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskstypeInput extends PartialType(CreateTaskstypeInput) {
  @Field(() => Int)
  id: number;
}
