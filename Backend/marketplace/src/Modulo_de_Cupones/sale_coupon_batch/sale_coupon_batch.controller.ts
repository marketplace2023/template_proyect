import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleCouponBatchService } from './sale_coupon_batch.service';
import { CreateSaleCouponBatchDto } from './dto/create-sale_coupon_batch.dto';
import { UpdateSaleCouponBatchDto } from './dto/update-sale_coupon_batch.dto';

@Controller('sale-coupon-batch')
export class SaleCouponBatchController {
  constructor(
    private readonly saleCouponBatchService: SaleCouponBatchService,
  ) {}

  @Post()
  create(@Body() createSaleCouponBatchDto: CreateSaleCouponBatchDto) {
    return this.saleCouponBatchService.create(createSaleCouponBatchDto);
  }

  @Get()
  findAll() {
    return this.saleCouponBatchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCouponBatchService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCouponBatchDto: UpdateSaleCouponBatchDto,
  ) {
    return this.saleCouponBatchService.update(+id, updateSaleCouponBatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCouponBatchService.remove(+id);
  }
}
//gestion-lotes-cupones                                                     # (sale.coupon.batch)
//# Gestiona los lotes de cupones para su distribución y seguimiento.

//configuracion-lotes-cupones                                               # (sale.coupon.batch)
//# Configura los lotes de cupones para su distribución y seguimiento.
