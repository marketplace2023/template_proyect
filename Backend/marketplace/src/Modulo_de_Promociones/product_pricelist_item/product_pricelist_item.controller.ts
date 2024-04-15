import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductPricelistItemService } from './product_pricelist_item.service';
import { CreateProductPricelistItemDto } from './dto/create-product_pricelist_item.dto';
import { UpdateProductPricelistItemDto } from './dto/update-product_pricelist_item.dto';

@Controller('product-pricelist-item')
export class ProductPricelistItemController {
  constructor(
    private readonly productPricelistItemService: ProductPricelistItemService,
  ) {}

  @Post()
  create(@Body() createProductPricelistItemDto: CreateProductPricelistItemDto) {
    return this.productPricelistItemService.create(
      createProductPricelistItemDto,
    );
  }

  @Get()
  findAll() {
    return this.productPricelistItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPricelistItemService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductPricelistItemDto: UpdateProductPricelistItemDto,
  ) {
    return this.productPricelistItemService.update(
      +id,
      updateProductPricelistItemDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPricelistItemService.remove(+id);
  }
}
//creacion-gestion-promociones                      # (product.pricelist.item, product.pricelist)
//# Permite la creación y gestión de promociones mediante la configuración de ítems en listas de precios.

//configuracion-opciones-promociones               # (product.pricelist.item, product.pricelist)
//# Configura las opciones y detalles de las promociones disponibles en las listas de precios.

//configuracion-fecha-expiracion-promociones        # (product.pricelist.item)
//# Configura la fecha de expiración para las promociones en los ítems de la lista de precios.

//informe-efectividad-promociones                   # (sale.order, product.pricelist.item, product.pricelist)
//# Genera un informe sobre la efectividad de las promociones en las ventas, utilizando datos de órdenes de venta y listas de precios.

//analisis-ventas-impulsadas-promociones            # (sale.order, product.pricelist.item, product.pricelist)
//# Realiza un análisis de las ventas impulsadas por las promociones, utilizando datos de órdenes de venta y listas de precios.

//resumen-promociones-activas                       # (product.pricelist.item, product.pricelist)
//# Ofrece un resumen de las promociones activas actualmente, mostrando los ítems de la lista de precios asociados.
