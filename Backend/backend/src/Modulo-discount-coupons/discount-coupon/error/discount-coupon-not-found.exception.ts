import { NotFoundException } from '@nestjs/common';

export class DiscountCouponNotFoundException extends NotFoundException {
  constructor() {
    super('Discount Coupon no encontrado');
  }
}
