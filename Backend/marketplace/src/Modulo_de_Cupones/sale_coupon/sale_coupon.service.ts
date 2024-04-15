import { Injectable } from '@nestjs/common';
import { CreateSaleCouponDto } from './dto/create-sale_coupon.dto';
import { UpdateSaleCouponDto } from './dto/update-sale_coupon.dto';

@Injectable()
export class SaleCouponService {
  create(createSaleCouponDto: CreateSaleCouponDto) {
    return 'This action adds a new saleCoupon';
  }

  findAll() {
    return `This action returns all saleCoupon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleCoupon`;
  }

  update(id: number, updateSaleCouponDto: UpdateSaleCouponDto) {
    return `This action updates a #${id} saleCoupon`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleCoupon`;
  }
}
