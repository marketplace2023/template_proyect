import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RatingRatingService } from './rating_rating.service';
import { CreateRatingRatingDto } from './dto/create-rating_rating.dto';
import { UpdateRatingRatingDto } from './dto/update-rating_rating.dto';

@Controller('rating-rating')
export class RatingRatingController {
  constructor(private readonly ratingRatingService: RatingRatingService) {}

  @Post()
  create(@Body() createRatingRatingDto: CreateRatingRatingDto) {
    return this.ratingRatingService.create(createRatingRatingDto);
  }

  @Get()
  findAll() {
    return this.ratingRatingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratingRatingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRatingRatingDto: UpdateRatingRatingDto,
  ) {
    return this.ratingRatingService.update(+id, updateRatingRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratingRatingService.remove(+id);
  }
}
//dejar-valoraciones-reseñas-productos-comprados     # (product.template, rating.rating)
//# Permite a los usuarios dejar valoraciones y reseñas para los productos que han comprado.

//visualizacion-puntuaciones-reseñas-productos        # (product.template, rating.rating)
//# Facilita la visualización de las puntuaciones y reseñas de los productos en el sistema.

//informe-valoraciones-reseñas-producto               # (product.template, rating.rating)
//# Genera un informe de las valoraciones y reseñas de los productos en el sistema.

//analisis-satisfaccion-cliente-valoraciones           # (rating.rating)
//# Realiza un análisis de la satisfacción del cliente basado en las valoraciones de los productos.

//resumen-productos-mejor-valorados                   # (product.template, rating.rating)
//# Ofrece un resumen de los productos mejor valorados en el sistema, basado en las puntuaciones de los usuarios.

//informe-valoraciones-reseñas-producto                         # (rating.rating)
//# Presenta un informe de las valoraciones y reseñas de los productos.
