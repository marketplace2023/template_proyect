import { NotFoundException } from '@nestjs/common';

export class SaleCouponProgramNotFoundException extends NotFoundException {
  constructor() {
    super('sale coupon program no encontrado');
  }
}
