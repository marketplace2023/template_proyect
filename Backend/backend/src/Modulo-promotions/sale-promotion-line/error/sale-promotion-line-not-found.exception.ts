import { NotFoundException } from '@nestjs/common';

export class SalePromotionLineNotFoundException extends NotFoundException {
  constructor() {
    super('sale promotion line no encontrado');
  }
}
