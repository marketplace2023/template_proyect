import { NotFoundException } from '@nestjs/common';

export class DiscountRuleNotFoundException extends NotFoundException {
  constructor() {
    super('Discount Rule no encontrado');
  }
}
