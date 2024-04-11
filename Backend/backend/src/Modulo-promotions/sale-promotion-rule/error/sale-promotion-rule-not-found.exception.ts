import { NotFoundException } from '@nestjs/common';

export class SalePromotionruleNotFoundException extends NotFoundException {
  constructor() {
    super('sale promotion rule no encontrado');
  }
}
