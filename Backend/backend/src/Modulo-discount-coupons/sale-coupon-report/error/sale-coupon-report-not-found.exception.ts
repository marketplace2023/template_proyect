import { NotFoundException } from '@nestjs/common';

export class SaleCouponReportNotFoundException extends NotFoundException {
  constructor() {
    super('Sale Coupon Report no encontrado');
  }
}
