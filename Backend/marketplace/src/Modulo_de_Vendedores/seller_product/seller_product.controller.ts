import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerProductService } from './seller_product.service';
import { CreateSellerProductDto } from './dto/create-seller_product.dto';
import { UpdateSellerProductDto } from './dto/update-seller_product.dto';

@Controller('seller-product')
export class SellerProductController {
  constructor(private readonly sellerProductService: SellerProductService) {}

  @Post()
  create(@Body() createSellerProductDto: CreateSellerProductDto) {
    return this.sellerProductService.create(createSellerProductDto);
  }

  @Get()
  findAll() {
    return this.sellerProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerProductService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerProductDto: UpdateSellerProductDto,
  ) {
    return this.sellerProductService.update(+id, updateSellerProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerProductService.remove(+id);
  }
}
//gestion-inventarios-vendedores                                             # (seller.product, seller.inventory)
//# Supervisión y administración de inventarios, asegurando stock adecuado para ventas.

//reporte-gestion-inventarios                                           # (seller.inventory, seller.product)
//# Estado actual del inventario, alertas y reposición de stock.
