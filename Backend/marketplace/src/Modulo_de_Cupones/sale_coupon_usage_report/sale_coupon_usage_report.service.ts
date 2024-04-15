import { Injectable } from '@nestjs/common';
import { CreateSaleCouponUsageReportDto } from './dto/create-sale_coupon_usage_report.dto';
import { UpdateSaleCouponUsageReportDto } from './dto/update-sale_coupon_usage_report.dto';

@Injectable()
export class SaleCouponUsageReportService {
  create(createSaleCouponUsageReportDto: CreateSaleCouponUsageReportDto) {
    return 'This action adds a new saleCouponUsageReport';
  }

  findAll() {
    return `This action returns all saleCouponUsageReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleCouponUsageReport`;
  }

  update(id: number, updateSaleCouponUsageReportDto: UpdateSaleCouponUsageReportDto) {
    return `This action updates a #${id} saleCouponUsageReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleCouponUsageReport`;
  }
}
