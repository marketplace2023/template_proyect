import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductUomService } from './product_uom.service';
import { CreateProductUomDto } from './dto/create-product_uom.dto';
import { UpdateProductUomDto } from './dto/update-product_uom.dto';

@Controller('product-uom')
export class ProductUomController {
  constructor(private readonly productUomService: ProductUomService) {}

  @Post()
  create(@Body() createProductUomDto: CreateProductUomDto) {
    return this.productUomService.create(createProductUomDto);
  }

  @Get()
  findAll() {
    return this.productUomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productUomService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductUomDto: UpdateProductUomDto,
  ) {
    return this.productUomService.update(+id, updateProductUomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productUomService.remove(+id);
  }
}
//configuracion-unidades-medida                                                            # (product.uom)
//# Gestiona las unidades de medida utilizadas para los productos, permitiendo la conversión entre diferentes unidades de medida.
