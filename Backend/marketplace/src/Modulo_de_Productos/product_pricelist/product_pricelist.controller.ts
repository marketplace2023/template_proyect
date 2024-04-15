import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductPricelistService } from './product_pricelist.service';
import { CreateProductPricelistDto } from './dto/create-product_pricelist.dto';
import { UpdateProductPricelistDto } from './dto/update-product_pricelist.dto';

@Controller('product-pricelist')
export class ProductPricelistController {
  constructor(
    private readonly productPricelistService: ProductPricelistService,
  ) {}

  @Post()
  create(@Body() createProductPricelistDto: CreateProductPricelistDto) {
    return this.productPricelistService.create(createProductPricelistDto);
  }

  @Get()
  findAll() {
    return this.productPricelistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPricelistService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductPricelistDto: UpdateProductPricelistDto,
  ) {
    return this.productPricelistService.update(+id, updateProductPricelistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPricelistService.remove(+id);
  }
}
//configuracion-listas-precios                                                        # (product.pricelist)
//# Administra listas de precios para productos, permitiendo definir precios específicos para diferentes clientes o condiciones.

//creacion-gestion-promociones                      # (product.pricelist.item, product.pricelist)
//# Permite la creación y gestión de promociones mediante la configuración de ítems en listas de precios.

//aplicacion-automatica-promociones                # (sale.order, product.pricelist)
//# Aplica automáticamente las promociones configuradas a las órdenes de venta durante el proceso de compra.

//configuracion-opciones-promociones               # (product.pricelist.item, product.pricelist)
//# Configura las opciones y detalles de las promociones disponibles en las listas de precios.

//informe-efectividad-promociones                   # (sale.order, product.pricelist.item, product.pricelist)
//# Genera un informe sobre la efectividad de las promociones en las ventas, utilizando datos de órdenes de venta y listas de precios.

//resumen-promociones-activas                       # (product.pricelist.item, product.pricelist)
//# Ofrece un resumen de las promociones activas actualmente, mostrando los ítems de la lista de precios asociados.
