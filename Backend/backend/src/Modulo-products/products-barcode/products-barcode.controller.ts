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
import { ProductsBarcodeService } from './products-barcode.service';
import { ProductsBarcode } from './entities/products-barcode.entity';
import { CreateProductsBarcodeDto } from './dto/create-products-barcode.dto';
import { UpdatedProductsBarcodeDto } from './dto/updated-products-barcode.dto';

@Controller('products-barcode')
export class ProductsBarcodeController {
  constructor(
    private readonly productsBarcodeService: ProductsBarcodeService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductsBarcode[]> {
    return await this.productsBarcodeService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductsBarcodeDto: CreateProductsBarcodeDto,
  ): Promise<ProductsBarcode> {
    return await this.productsBarcodeService.create(createaProductsBarcodeDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductsBarcode> {
    return await this.productsBarcodeService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductsBarcodeDto: UpdatedProductsBarcodeDto,
    @Param('id') id: string,
  ): Promise<ProductsBarcode> {
    return await this.productsBarcodeService.updated(
      +id,
      updatedProductsBarcodeDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productsBarcodeService.deleted(+id);
  }
}
