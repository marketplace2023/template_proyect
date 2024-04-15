import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerAnalyticsService } from './seller_analytics.service';
import { CreateSellerAnalyticDto } from './dto/create-seller_analytic.dto';
import { UpdateSellerAnalyticDto } from './dto/update-seller_analytic.dto';

@Controller('seller-analytics')
export class SellerAnalyticsController {
  constructor(
    private readonly sellerAnalyticsService: SellerAnalyticsService,
  ) {}

  @Post()
  create(@Body() createSellerAnalyticDto: CreateSellerAnalyticDto) {
    return this.sellerAnalyticsService.create(createSellerAnalyticDto);
  }

  @Get()
  findAll() {
    return this.sellerAnalyticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerAnalyticsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerAnalyticDto: UpdateSellerAnalyticDto,
  ) {
    return this.sellerAnalyticsService.update(+id, updateSellerAnalyticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerAnalyticsService.remove(+id);
  }
}
//evaluacion-desempeno-vendedores                            # (seller.rating, seller.analytics, seller.complaint)
//# Análisis de métricas para mejorar la satisfacción y rendimiento de vendedores.

//informe-ventas-vendedor                                                    # (seller.analytics, seller.order)
//# Análisis detallado de ventas, ordenes y productos más vendidos por vendedor.
