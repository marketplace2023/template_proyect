import { NotFoundException } from '@nestjs/common';

export class SalePromotionCategoryRuleNotFoundException extends NotFoundException {
  constructor() {
    super('sale promotion category rule no encontrado');
  }
}
