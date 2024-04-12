import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductBrandService } from './product_brand.service';
import { CreateProductBrandDto } from './dto/create-product_brand.dto';
import { UpdateProductBrandDto } from './dto/update-product_brand.dto';

@Controller('product-brand')
export class ProductBrandController {
  constructor(private readonly productBrandService: ProductBrandService) {}

  @Post()
  create(@Body() createProductBrandDto: CreateProductBrandDto) {
    return this.productBrandService.create(createProductBrandDto);
  }

  @Get()
  findAll() {
    return this.productBrandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productBrandService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductBrandDto: UpdateProductBrandDto,
  ) {
    return this.productBrandService.update(+id, updateProductBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productBrandService.remove(+id);
  }
}
//configuracion-marca-producto                                                           # (product.brand)
//# Gestiona las marcas asociadas a los productos, permitiendo la clasificación y búsqueda por marca.
