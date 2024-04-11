import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsSupplierService } from './products-supplier.service';
import { ProductsSupplier } from './entities/products-supplier.entity';
import { CreateProductsSupplierDto } from './dto/create-products-supplier.dto';
import { UpdatedProductsSupplierDto } from './dto/updated-products-supplier.dto';
@Controller('products-supplier')
export class ProductsSupplierController {
  constructor(
    private readonly productsSupplierService: ProductsSupplierService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductsSupplier[]> {
    return await this.productsSupplierService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductsSupplierDto: CreateProductsSupplierDto,
  ): Promise<ProductsSupplier> {
    return await this.productsSupplierService.create(
      createaProductsSupplierDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductsSupplier> {
    return await this.productsSupplierService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductsSupplierDto: UpdatedProductsSupplierDto,
    @Param('id') id: string,
  ): Promise<ProductsSupplier> {
    return await this.productsSupplierService.updated(
      +id,
      updatedProductsSupplierDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productsSupplierService.deleted(+id);
  }
}
