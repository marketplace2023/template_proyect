import { NotFoundException } from '@nestjs/common';

export class SalePromotionAppliedRuleNotFoundException extends NotFoundException {
  constructor() {
    super('sale Promotion Applied Rule no encontrado');
  }
}
