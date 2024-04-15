import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerDashboardService } from './seller_dashboard.service';
import { CreateSellerDashboardDto } from './dto/create-seller_dashboard.dto';
import { UpdateSellerDashboardDto } from './dto/update-seller_dashboard.dto';

@Controller('seller-dashboard')
export class SellerDashboardController {
  constructor(
    private readonly sellerDashboardService: SellerDashboardService,
  ) {}

  @Post()
  create(@Body() createSellerDashboardDto: CreateSellerDashboardDto) {
    return this.sellerDashboardService.create(createSellerDashboardDto);
  }

  @Get()
  findAll() {
    return this.sellerDashboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerDashboardService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerDashboardDto: UpdateSellerDashboardDto,
  ) {
    return this.sellerDashboardService.update(+id, updateSellerDashboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerDashboardService.remove(+id);
  }
}
//personalizacion-dashboard-vendedores                                        # (seller.dashboard)
//# Adaptación del panel de control para vendedores con métricas y gestiones relevantes.
