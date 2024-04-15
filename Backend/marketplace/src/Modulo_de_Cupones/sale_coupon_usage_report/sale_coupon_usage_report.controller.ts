import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleCouponUsageReportService } from './sale_coupon_usage_report.service';
import { CreateSaleCouponUsageReportDto } from './dto/create-sale_coupon_usage_report.dto';
import { UpdateSaleCouponUsageReportDto } from './dto/update-sale_coupon_usage_report.dto';

@Controller('sale-coupon-usage-report')
export class SaleCouponUsageReportController {
  constructor(
    private readonly saleCouponUsageReportService: SaleCouponUsageReportService,
  ) {}

  @Post()
  create(
    @Body() createSaleCouponUsageReportDto: CreateSaleCouponUsageReportDto,
  ) {
    return this.saleCouponUsageReportService.create(
      createSaleCouponUsageReportDto,
    );
  }

  @Get()
  findAll() {
    return this.saleCouponUsageReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCouponUsageReportService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCouponUsageReportDto: UpdateSaleCouponUsageReportDto,
  ) {
    return this.saleCouponUsageReportService.update(
      +id,
      updateSaleCouponUsageReportDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCouponUsageReportService.remove(+id);
  }
}
//reporte-uso-cupones                                                # (sale.coupon.usage.report)
//# Genera un informe sobre el uso de cupones por parte de los clientes.

// analisis-uso-cupones                                               # (sale.coupon.usage.report)
//# Realiza un análisis del uso de cupones por parte de los clientes.
