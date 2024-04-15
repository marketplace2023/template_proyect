import { Injectable } from '@nestjs/common';
import { CreateSaleCouponUsageDto } from './dto/create-sale_coupon_usage.dto';
import { UpdateSaleCouponUsageDto } from './dto/update-sale_coupon_usage.dto';

@Injectable()
export class SaleCouponUsageService {
  create(createSaleCouponUsageDto: CreateSaleCouponUsageDto) {
    return 'This action adds a new saleCouponUsage';
  }

  findAll() {
    return `This action returns all saleCouponUsage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleCouponUsage`;
  }

  update(id: number, updateSaleCouponUsageDto: UpdateSaleCouponUsageDto) {
    return `This action updates a #${id} saleCouponUsage`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleCouponUsage`;
  }
}
