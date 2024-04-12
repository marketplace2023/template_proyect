import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockLocationRouteService } from './stock_location_route.service';
import { CreateStockLocationRouteDto } from './dto/create-stock_location_route.dto';
import { UpdateStockLocationRouteDto } from './dto/update-stock_location_route.dto';

@Controller('stock-location-route')
export class StockLocationRouteController {
  constructor(
    private readonly stockLocationRouteService: StockLocationRouteService,
  ) {}

  @Post()
  create(@Body() createStockLocationRouteDto: CreateStockLocationRouteDto) {
    return this.stockLocationRouteService.create(createStockLocationRouteDto);
  }

  @Get()
  findAll() {
    return this.stockLocationRouteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockLocationRouteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockLocationRouteDto: UpdateStockLocationRouteDto,
  ) {
    return this.stockLocationRouteService.update(
      +id,
      updateStockLocationRouteDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockLocationRouteService.remove(+id);
  }
}
//rutas-envio                                                                       # (stock.location.route)
//# Administra las rutas de envío para traslado de productos.
