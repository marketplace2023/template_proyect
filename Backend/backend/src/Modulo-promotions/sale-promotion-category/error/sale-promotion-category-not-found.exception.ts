import { NotFoundException } from '@nestjs/common';

export class SalePromotionCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('sale promotion no encontrado');
  }
}
