import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductTemplateService } from './product_template.service';
import { CreateProductTemplateDto } from './dto/create-product_template.dto';
import { UpdateProductTemplateDto } from './dto/update-product_template.dto';

@Controller('product-template')
export class ProductTemplateController {
  constructor(
    private readonly productTemplateService: ProductTemplateService,
  ) {}

  @Post()
  create(@Body() createProductTemplateDto: CreateProductTemplateDto) {
    return this.productTemplateService.create(createProductTemplateDto);
  }

  @Get()
  findAll() {
    return this.productTemplateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTemplateService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductTemplateDto: UpdateProductTemplateDto,
  ) {
    return this.productTemplateService.update(+id, updateProductTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productTemplateService.remove(+id);
  }
}

//gestion-productos                                                                      # (product.template)
//# Gestiona la información general y común para todos los productos, como nombre, descripción, categoría y unidades de medida.

//informe - precios - productos; # (product.template, product.product)
//# Genera un informe de precios de productos, mostrando los precios asociados a las plantillas y variantes de productos.

// busqueda-seleccion-productos-comprar           # (product.template)
//# Permite a los usuarios buscar y seleccionar productos para comprar en el sistema.

//asignacion-productos-categorias                      # (product.template)
//# Permite asignar productos a categorías existentes en el sistema.

//visualizacion-productos-categoria                    # (product.template)
//# Facilita la visualización de productos dentro de una categoría específica.

//informe-ventas-categoria-productos                   # (sale.order.line, product.template, product.category)
//# Genera un informe de las ventas realizadas por categoría de productos en el sistema.

//analisis-tendencias-compra-categoria                 # (sale.order.line, product.template, product.category)
//# Realiza un análisis de las tendencias de compra por categoría de productos.

//resumen-productos-mejor-clasificados-categoria       # (product.template, product.category)
//# Ofrece un resumen de los productos mejor clasificados dentro de cada categoría en el sistema.

//informe-inventario-categoria                         # (product.template, stock.quant, product.category)
//# Genera un informe del inventario de productos por categoría en el sistema.

//dejar-valoraciones-reseñas-productos-comprados     # (product.template, rating.rating)
//# Permite a los usuarios dejar valoraciones y reseñas para los productos que han comprado.

//visualizacion-puntuaciones-reseñas-productos        # (product.template, rating.rating)
//# Facilita la visualización de las puntuaciones y reseñas de los productos en el sistema.

//informe-valoraciones-reseñas-producto               # (product.template, rating.rating)
//# Genera un informe de las valoraciones y reseñas de los productos en el sistema.

//resumen-productos-mejor-valorados                   # (product.template, rating.rating)
//# Ofrece un resumen de los productos mejor valorados en el sistema, basado en las puntuaciones de los usuarios.
