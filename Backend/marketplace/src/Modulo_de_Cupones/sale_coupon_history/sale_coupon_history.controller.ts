import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleCouponHistoryService } from './sale_coupon_history.service';
import { CreateSaleCouponHistoryDto } from './dto/create-sale_coupon_history.dto';
import { UpdateSaleCouponHistoryDto } from './dto/update-sale_coupon_history.dto';

@Controller('sale-coupon-history')
export class SaleCouponHistoryController {
  constructor(
    private readonly saleCouponHistoryService: SaleCouponHistoryService,
  ) {}

  @Post()
  create(@Body() createSaleCouponHistoryDto: CreateSaleCouponHistoryDto) {
    return this.saleCouponHistoryService.create(createSaleCouponHistoryDto);
  }

  @Get()
  findAll() {
    return this.saleCouponHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCouponHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCouponHistoryDto: UpdateSaleCouponHistoryDto,
  ) {
    return this.saleCouponHistoryService.update(
      +id,
      updateSaleCouponHistoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCouponHistoryService.remove(+id);
  }
}
//historial-uso-cupones                                                   # (sale.coupon.history)
//# Registra el historial de uso de cupones por parte de los clientes.
