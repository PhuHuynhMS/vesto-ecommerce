import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];

  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  stockQuantity: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  categories?: string[];

  @IsString()
  description: string;
}
