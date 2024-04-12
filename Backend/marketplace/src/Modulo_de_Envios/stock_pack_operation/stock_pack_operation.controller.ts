import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockPackOperationService } from './stock_pack_operation.service';
import { CreateStockPackOperationDto } from './dto/create-stock_pack_operation.dto';
import { UpdateStockPackOperationDto } from './dto/update-stock_pack_operation.dto';

@Controller('stock-pack-operation')
export class StockPackOperationController {
  constructor(
    private readonly stockPackOperationService: StockPackOperationService,
  ) {}

  @Post()
  create(@Body() createStockPackOperationDto: CreateStockPackOperationDto) {
    return this.stockPackOperationService.create(createStockPackOperationDto);
  }

  @Get()
  findAll() {
    return this.stockPackOperationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockPackOperationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockPackOperationDto: UpdateStockPackOperationDto,
  ) {
    return this.stockPackOperationService.update(
      +id,
      updateStockPackOperationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockPackOperationService.remove(+id);
  }
}
//movimientos-productos                                                                # (stock.move)
//# Gestiona movimientos individuales de productos dentro de una operación de envío.
