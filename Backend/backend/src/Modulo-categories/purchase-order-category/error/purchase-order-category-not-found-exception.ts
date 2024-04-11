import { NotFoundException } from '@nestjs/common';

export class PurchaseOrderCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('purchaseOrderCategory no encontrado');
  }
}
