import { NotFoundException } from '@nestjs/common';

export class CouponCodeNotFoundException extends NotFoundException {
  constructor() {
    super('Coupon Code no encontrado');
  }
}
