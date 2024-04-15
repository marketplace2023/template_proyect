import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerPromotionService } from './seller_promotion.service';
import { CreateSellerPromotionDto } from './dto/create-seller_promotion.dto';
import { UpdateSellerPromotionDto } from './dto/update-seller_promotion.dto';

@Controller('seller-promotion')
export class SellerPromotionController {
  constructor(
    private readonly sellerPromotionService: SellerPromotionService,
  ) {}

  @Post()
  create(@Body() createSellerPromotionDto: CreateSellerPromotionDto) {
    return this.sellerPromotionService.create(createSellerPromotionDto);
  }

  @Get()
  findAll() {
    return this.sellerPromotionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerPromotionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerPromotionDto: UpdateSellerPromotionDto,
  ) {
    return this.sellerPromotionService.update(+id, updateSellerPromotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerPromotionService.remove(+id);
  }
}
//administracion-promociones-suscripciones                          # (seller.promotion, seller.subscription)
//# Gestión de promociones y manejo de suscripciones de vendedores.

//evaluacion-estrategias-promocion                                       # (seller.promotion)
//# Impacto y análisis de las promociones en las ventas.
