import { NotFoundException } from '@nestjs/common';

export class SaleCouponProgramLineNotFoundException extends NotFoundException {
  constructor() {
    super('sale coupon program line no encontrado');
  }
}
