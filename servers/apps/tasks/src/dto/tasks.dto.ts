import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { TaskTypeIDDtoInput } from './tasks-type.dto';

@InputType()
export class TasksDtoInput {
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  name: string;

  @Field(() => TaskTypeIDDtoInput)
  @IsNotEmpty()
  taskType: TaskTypeIDDtoInput;
}
