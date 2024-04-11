import { NotFoundException } from '@nestjs/common';

export class SalePromotionProductRuleNotFoundException extends NotFoundException {
  constructor() {
    super('sale promotion producto rule no encontrado');
  }
}
