import { NotFoundException } from '@nestjs/common';

export class SaleRatingNotFoundException extends NotFoundException {
  constructor() {
    super('sale Rating no encontrado');
  }
}
