import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockProductionLotService } from './stock_production_lot.service';
import { CreateStockProductionLotDto } from './dto/create-stock_production_lot.dto';
import { UpdateStockProductionLotDto } from './dto/update-stock_production_lot.dto';

@Controller('stock-production-lot')
export class StockProductionLotController {
  constructor(
    private readonly stockProductionLotService: StockProductionLotService,
  ) {}

  @Post()
  create(@Body() createStockProductionLotDto: CreateStockProductionLotDto) {
    return this.stockProductionLotService.create(createStockProductionLotDto);
  }

  @Get()
  findAll() {
    return this.stockProductionLotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockProductionLotService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockProductionLotDto: UpdateStockProductionLotDto,
  ) {
    return this.stockProductionLotService.update(
      +id,
      updateStockProductionLotDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockProductionLotService.remove(+id);
  }
}
//lotes-productos                                                                     # (stock.production.lot)
//# Administra lotes de productos involucrados en operaciones de envío.
