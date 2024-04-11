import { NotFoundException } from '@nestjs/common';

export class SaleOrderCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('sale Order Category no encontrado');
  }
}
