import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Column } from 'typeorm';
import { EmployeeIDDtoInput } from './employee.dto';

@InputType()
export class TaskAttachementInput {
  @Field(() => String, { nullable: true })
  @Column()
  @IsString()
  name: string;

  @Field(() => String, { nullable: true })
  @Column()
  @IsString()
  file_name: string;

  @Field(() => String, { nullable: true })
  @Column()
  @IsString()
  file_url: string;

  @Field(() => EmployeeIDDtoInput, { nullable: true })
  @IsOptional()
  employee: EmployeeIDDtoInput;
}

@InputType()
export class TaskAttachementIDDtoInput {
  @Field(() => Number)
  @IsNotEmpty()
  id: number;
}
