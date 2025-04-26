import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IProduct } from './interfaces/product.interface';
import { Product as ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async create(
    @Body()
    createProductDto: CreateProductDto,
    files: Array<Express.Multer.File>,
  ): Promise<IProduct> {
    // return ra interface product là do interface product có thêm thuộc tính isInStock
    //TODO: Xử lý file upload thành chuỗi đưa vào images
    // Xử lý categories
    // Xử lý slug
    // return this.productRepository.create(createProductDto);
    return this.productRepository.save(createProductDto);
  }

  async findAll(): Promise<IProduct[]> {
    const products = await this.productRepository.find();
    return products.map((product) => ({
      ...product,
      isInStock: product.stockQuantity > 0,
    }));
  }

  findOne(id: number): Promise<IProduct | null> {
    return this.productRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
