import { NotFoundException } from '@nestjs/common';

export class SalePromotionCartRuleNotFoundException extends NotFoundException {
  constructor() {
    super('sale promotion Cart Rule no encontrado');
  }
}
