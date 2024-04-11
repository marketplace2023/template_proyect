import { NotFoundException } from '@nestjs/common';

export class DeliveryPriceRuleNotFoundException extends NotFoundException {
  constructor() {
    super('delivery prince rule no encontrado');
  }
}
