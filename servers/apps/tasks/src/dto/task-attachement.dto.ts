import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class TaskAttachementIDDtoInput {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}
