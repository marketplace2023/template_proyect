import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductPricelistService } from './product_pricelist.service';
import { CreateProductPricelistDto } from './dto/create-product_pricelist.dto';
import { UpdateProductPricelistDto } from './dto/update-product_pricelist.dto';

@Controller('product-pricelist')
export class ProductPricelistController {
  constructor(
    private readonly productPricelistService: ProductPricelistService,
  ) {}

  @Post()
  create(@Body() createProductPricelistDto: CreateProductPricelistDto) {
    return this.productPricelistService.create(createProductPricelistDto);
  }

  @Get()
  findAll() {
    return this.productPricelistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPricelistService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductPricelistDto: UpdateProductPricelistDto,
  ) {
    return this.productPricelistService.update(+id, updateProductPricelistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPricelistService.remove(+id);
  }
}
//configuracion-listas-precios                                                        # (product.pricelist)
//# Administra listas de precios para productos, permitiendo definir precios específicos para diferentes clientes o condiciones.
