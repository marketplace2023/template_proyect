import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockPickingPackageService } from './stock_picking_package.service';
import { CreateStockPickingPackageDto } from './dto/create-stock_picking_package.dto';
import { UpdateStockPickingPackageDto } from './dto/update-stock_picking_package.dto';

@Controller('stock-picking-package')
export class StockPickingPackageController {
  constructor(
    private readonly stockPickingPackageService: StockPickingPackageService,
  ) {}

  @Post()
  create(@Body() createStockPickingPackageDto: CreateStockPickingPackageDto) {
    return this.stockPickingPackageService.create(createStockPickingPackageDto);
  }

  @Get()
  findAll() {
    return this.stockPickingPackageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockPickingPackageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockPickingPackageDto: UpdateStockPickingPackageDto,
  ) {
    return this.stockPickingPackageService.update(
      +id,
      updateStockPickingPackageDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockPickingPackageService.remove(+id);
  }
}
//paquetes-operaciones-envio                                                      # (stock.picking.package)
//# Relaciona paquetes físicos con operaciones de envío en curso.
