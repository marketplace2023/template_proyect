import { NotFoundException } from '@nestjs/common';

export class SaleCouponNotFoundException extends NotFoundException {
  constructor() {
    super('sale coupon no encontrado');
  }
}
