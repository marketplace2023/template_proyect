import { NotFoundException } from '@nestjs/common';

export class SalePromotionNotFoundException extends NotFoundException {
  constructor() {
    super('sale promotion no encontrado');
  }
}
