import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class TasksTypeDtoInput {
  @IsString()
  @Type(() => String)
  @Field({ nullable: true })
  name: string;
}

@InputType()
export class TaskTypeIDDtoInput {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}
