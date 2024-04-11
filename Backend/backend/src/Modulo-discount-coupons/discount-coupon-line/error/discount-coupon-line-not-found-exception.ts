import { NotFoundException } from '@nestjs/common';

export class DiscountCouponLineNotFoundException extends NotFoundException {
  constructor() {
    super('Discount Coupon Line no encontrado');
  }
}
