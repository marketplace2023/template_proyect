import { NotFoundException } from '@nestjs/common';

export class SaleCouponHistoryNotFoundException extends NotFoundException {
  constructor() {
    super('Sale Coupon History no encontrado');
  }
}
