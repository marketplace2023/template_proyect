import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerRatingService } from './seller_rating.service';
import { CreateSellerRatingDto } from './dto/create-seller_rating.dto';
import { UpdateSellerRatingDto } from './dto/update-seller_rating.dto';

@Controller('seller-rating')
export class SellerRatingController {
  constructor(private readonly sellerRatingService: SellerRatingService) {}

  @Post()
  create(@Body() createSellerRatingDto: CreateSellerRatingDto) {
    return this.sellerRatingService.create(createSellerRatingDto);
  }

  @Get()
  findAll() {
    return this.sellerRatingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerRatingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerRatingDto: UpdateSellerRatingDto,
  ) {
    return this.sellerRatingService.update(+id, updateSellerRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerRatingService.remove(+id);
  }
}
//evaluacion-desempeno-vendedores                            # (seller.rating, seller.analytics, seller.complaint)
//# Análisis de métricas para mejorar la satisfacción y rendimiento de vendedores.

//resumen-valoraciones-quejas                                              # (seller.rating, seller.complaint)
//# Compilación de feedback para identificación de mejoras.
