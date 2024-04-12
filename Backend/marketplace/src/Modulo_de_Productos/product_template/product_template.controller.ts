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
