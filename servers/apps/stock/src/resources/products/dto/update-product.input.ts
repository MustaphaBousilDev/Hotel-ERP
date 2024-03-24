import { InputType, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { SubCategoryInputID } from '../../subcategoriries/dto/create-subcategoriry.input';
import { SupplierIDDtoInput } from '../../suppliers/dto/create-supplier.input';
import { BrandInputID } from '../../brands/dto/create-brand.input';
import { HotelIDDtoInput } from '../../hotels/hotel.dto';
import { StockLocationIDDtoInput } from '../../stockLocation/stock-location.dto';
@InputType()
export class UpdateProductInput {
  @IsOptional()
  @Field()
  @IsString()
  name?: string;

  @IsOptional()
  @Field()
  @IsString()
  description?: string;

  @IsOptional()
  @Field(() => SubCategoryInputID)
  @IsNotEmpty()
  subCategory?: SubCategoryInputID;

  @IsOptional()
  @Field()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @Field()
  @IsNumber()
  price?: number;

  @IsOptional()
  @Field(() => SupplierIDDtoInput)
  @IsNotEmpty()
  supplier?: SupplierIDDtoInput;

  @IsOptional()
  @Field(() => [SupplierIDDtoInput])
  @IsNotEmpty()
  tags?: SupplierIDDtoInput[];

  @IsOptional()
  @Field(() => BrandInputID)
  @IsNotEmpty()
  brand?: BrandInputID;

  @IsOptional()
  @Field()
  @IsBoolean()
  status?: boolean;

  @IsOptional()
  @Field(() => HotelIDDtoInput)
  @IsNotEmpty()
  hotel?: HotelIDDtoInput;

  @IsOptional()
  @Field(() => StockLocationIDDtoInput)
  @IsNotEmpty()
  location?: StockLocationIDDtoInput;
}
