import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerInventoryService } from './seller_inventory.service';
import { CreateSellerInventoryDto } from './dto/create-seller_inventory.dto';
import { UpdateSellerInventoryDto } from './dto/update-seller_inventory.dto';

@Controller('seller-inventory')
export class SellerInventoryController {
  constructor(
    private readonly sellerInventoryService: SellerInventoryService,
  ) {}

  @Post()
  create(@Body() createSellerInventoryDto: CreateSellerInventoryDto) {
    return this.sellerInventoryService.create(createSellerInventoryDto);
  }

  @Get()
  findAll() {
    return this.sellerInventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerInventoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerInventoryDto: UpdateSellerInventoryDto,
  ) {
    return this.sellerInventoryService.update(+id, updateSellerInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerInventoryService.remove(+id);
  }
}
//gestion-inventarios-vendedores                                             # (seller.product, seller.inventory)
//# Supervisión y administración de inventarios, asegurando stock adecuado para ventas.

//reporte-gestion-inventarios                                           # (seller.inventory, seller.product)
//# Estado actual del inventario, alertas y reposición de stock.
