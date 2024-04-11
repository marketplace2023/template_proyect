import { NotFoundException } from '@nestjs/common';

export class DiscountCouponHistoryNotFoundException extends NotFoundException {
  constructor() {
    super('Discount Coupon History no encontrado');
  }
}
