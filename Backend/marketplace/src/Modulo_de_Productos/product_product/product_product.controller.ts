import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductProductService } from './product_product.service';
import { CreateProductProductDto } from './dto/create-product_product.dto';
import { UpdateProductProductDto } from './dto/update-product_product.dto';

@Controller('product-product')
export class ProductProductController {
  constructor(private readonly productProductService: ProductProductService) {}

  @Post()
  create(@Body() createProductProductDto: CreateProductProductDto) {
    return this.productProductService.create(createProductProductDto);
  }

  @Get()
  findAll() {
    return this.productProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productProductService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductProductDto: UpdateProductProductDto,
  ) {
    return this.productProductService.update(+id, updateProductProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productProductService.remove(+id);
  }
}

//gestion-variantes-producto                                                             # (product.product)
//# Gestiona las variantes específicas de un producto definido en la plantilla, incluyendo información adicional como códigos de barras y referencias internas.

//gestion-productos-favoritos                                               # (public.product_product)
//# Gestiona los productos marcados como favoritos por los usuarios.

//configuracion-productos                                                   # (public.product_product)
//# Configura los productos disponibles en la aplicación.

//analisis-productos-favoritos                                              # (public.product_product)
//# Realiza análisis sobre los productos marcados como favoritos por los usuarios.
