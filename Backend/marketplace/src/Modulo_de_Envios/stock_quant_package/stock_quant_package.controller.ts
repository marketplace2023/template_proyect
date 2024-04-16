import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockQuantPackageService } from './stock_quant_package.service';
import { CreateStockQuantPackageDto } from './dto/create-stock_quant_package.dto';
import { UpdateStockQuantPackageDto } from './dto/update-stock_quant_package.dto';

@Controller('stock-quant-package')
export class StockQuantPackageController {
  constructor(
    private readonly stockQuantPackageService: StockQuantPackageService,
  ) {}

  @Post()
  create(@Body() createStockQuantPackageDto: CreateStockQuantPackageDto) {
    return this.stockQuantPackageService.create(createStockQuantPackageDto);
  }

  @Get()
  findAll() {
    return this.stockQuantPackageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockQuantPackageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockQuantPackageDto: UpdateStockQuantPackageDto,
  ) {
    return this.stockQuantPackageService.update(
      +id,
      updateStockQuantPackageDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockQuantPackageService.remove(+id);
  }
}
//paquetes-fisicos                                                                 # (stock.quant.package)
//# Representa los paquetes físicos que contienen los productos enviados.

//gestion-paquetes                                                     # (public.stock_quant_package)
//# Gestión de paquetes de productos en el almacén.

//seguimiento-paquetes                                                 # (public.stock_quant_package)
//# Seguimiento de paquetes de productos en el almacén.

//ajustes-paquetes                                                      # (public.stock_quant_package)
//# Ajustes en los paquetes de productos en el almacén.

//configuracion-paquetes                                                # (public.stock_quant_package)
//# Configuración de paquetes de productos en el almacén.

//reporte-paquetes                                                      # (public.stock_quant_package)
//# Reporte de paquetes de productos en el almacén.
