import { NotFoundException } from '@nestjs/common';

export class ProductProductStockTrackConfirmationRelNotFoundException extends NotFoundException {
  constructor() {
    super('Product Product Stock Track Confirmation Rel no encontrado');
  }
}
