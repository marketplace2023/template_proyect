import { NotFoundException } from '@nestjs/common';

export class SalePromotionTemplateNotFoundException extends NotFoundException {
  constructor() {
    super('sale promotion template no encontrado');
  }
}
