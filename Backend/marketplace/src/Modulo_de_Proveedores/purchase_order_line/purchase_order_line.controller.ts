import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PurchaseOrderLineService } from './purchase_order_line.service';
import { CreatePurchaseOrderLineDto } from './dto/create-purchase_order_line.dto';
import { UpdatePurchaseOrderLineDto } from './dto/update-purchase_order_line.dto';

@Controller('purchase-order-line')
export class PurchaseOrderLineController {
  constructor(
    private readonly purchaseOrderLineService: PurchaseOrderLineService,
  ) {}

  @Post()
  create(@Body() createPurchaseOrderLineDto: CreatePurchaseOrderLineDto) {
    return this.purchaseOrderLineService.create(createPurchaseOrderLineDto);
  }

  @Get()
  findAll() {
    return this.purchaseOrderLineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseOrderLineService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePurchaseOrderLineDto: UpdatePurchaseOrderLineDto,
  ) {
    return this.purchaseOrderLineService.update(
      +id,
      updatePurchaseOrderLineDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseOrderLineService.remove(+id);
  }
}
//detalle-lineas-ordenes-compra                                     # (purchase_order_line)
//# Gestiona los detalles de las líneas de las órdenes de compra, como la cantidad, el precio unitario y los impuestos.

// configuracion-lineas-ordenes-compra                              # (purchase_order_line)
//# Configura los ajustes relacionados con las líneas de las órdenes de compra, como las unidades de medida y los precios predeterminados.

//analisis-lineas-ordenes-compra                                     # (purchase_order_line)
//# Genera informes sobre las líneas de las órdenes de compra, incluyendo análisis de precios y cantidades.
