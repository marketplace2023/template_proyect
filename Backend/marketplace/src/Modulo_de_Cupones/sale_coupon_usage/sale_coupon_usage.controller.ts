import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleCouponUsageService } from './sale_coupon_usage.service';
import { CreateSaleCouponUsageDto } from './dto/create-sale_coupon_usage.dto';
import { UpdateSaleCouponUsageDto } from './dto/update-sale_coupon_usage.dto';

@Controller('sale-coupon-usage')
export class SaleCouponUsageController {
  constructor(
    private readonly saleCouponUsageService: SaleCouponUsageService,
  ) {}

  @Post()
  create(@Body() createSaleCouponUsageDto: CreateSaleCouponUsageDto) {
    return this.saleCouponUsageService.create(createSaleCouponUsageDto);
  }

  @Get()
  findAll() {
    return this.saleCouponUsageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCouponUsageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCouponUsageDto: UpdateSaleCouponUsageDto,
  ) {
    return this.saleCouponUsageService.update(+id, updateSaleCouponUsageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCouponUsageService.remove(+id);
  }
}
//registro-uso-cupones                                                      # (sale.coupon.usage)
//# Registra el uso de cupones por parte de los clientes durante el proceso de compra.
