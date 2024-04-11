import { NotFoundException } from '@nestjs/common';

export class SaleCouponRuleNotFoundException extends NotFoundException {
  constructor() {
    super('Sale Coupon Rule no encontrado');
  }
}
