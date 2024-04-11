import { NotFoundException } from '@nestjs/common';

export class SalePromotionCodeNotFoundException extends NotFoundException {
  constructor() {
    super('sale promotion code no encontrado');
  }
}
