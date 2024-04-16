import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockPackageTypeService } from './stock_package_type.service';
import { CreateStockPackageTypeDto } from './dto/create-stock_package_type.dto';
import { UpdateStockPackageTypeDto } from './dto/update-stock_package_type.dto';

@Controller('stock-package-type')
export class StockPackageTypeController {
  constructor(
    private readonly stockPackageTypeService: StockPackageTypeService,
  ) {}

  @Post()
  create(@Body() createStockPackageTypeDto: CreateStockPackageTypeDto) {
    return this.stockPackageTypeService.create(createStockPackageTypeDto);
  }

  @Get()
  findAll() {
    return this.stockPackageTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockPackageTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockPackageTypeDto: UpdateStockPackageTypeDto,
  ) {
    return this.stockPackageTypeService.update(+id, updateStockPackageTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockPackageTypeService.remove(+id);
  }
}
// definicion-tipos-paquetes                                              # (public.stock_package_type)
//# Definición de tipos de paquetes para el manejo de productos.

//asignacion-tipos-paquetes-productos                                    # (public.stock_package_type)
//# Asignación de tipos de paquetes a productos específicos.

//configuracion-tipos-paquetes                                          # (public.stock_package_type)
//# Configuración de tipos de paquetes para el manejo de productos.

//reporte-tipos-paquetes                                                # (public.stock_package_type)
//# Reporte de tipos de paquetes para el manejo de productos.
