import { NotFoundException } from '@nestjs/common';

export class SalePromotionCustomerRuleNotFoundException extends NotFoundException {
  constructor() {
    super('sale promotion customer rule no encontrado');
  }
}
