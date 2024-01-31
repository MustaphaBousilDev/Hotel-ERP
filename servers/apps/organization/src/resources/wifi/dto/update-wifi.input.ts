import { CreateWifiInput } from './create-wifi.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWifiInput extends PartialType(CreateWifiInput) {
  @Field(() => Int)
  id: number;
}
