import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { IProduct } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() files: Array<Express.Multer.File>,
  ): Promise<void> {
    const result = await this.productService.create(createProductDto, files);
    if (result) console.log(result);
  }

  @Get()
  async findAll(): Promise<IProduct[]> {
    return await this.productService.findAll();
  }
}
