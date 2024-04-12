import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductAttributeService } from './product_attribute.service';
import { CreateProductAttributeDto } from './dto/create-product_attribute.dto';
import { UpdateProductAttributeDto } from './dto/update-product_attribute.dto';

@Controller('product-attribute')
export class ProductAttributeController {
  constructor(
    private readonly productAttributeService: ProductAttributeService,
  ) {}

  @Post()
  create(@Body() createProductAttributeDto: CreateProductAttributeDto) {
    return this.productAttributeService.create(createProductAttributeDto);
  }

  @Get()
  findAll() {
    return this.productAttributeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productAttributeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductAttributeDto: UpdateProductAttributeDto,
  ) {
    return this.productAttributeService.update(+id, updateProductAttributeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productAttributeService.remove(+id);
  }
}
//configuracion-atributos-producto                                                     # (product.attribute)
//# Gestiona los atributos que pueden ser asignados a los productos, como color, tamaño, material, etc.
