import { NotFoundException } from '@nestjs/common';

export class SaleWishNotFoundException extends NotFoundException {
  constructor() {
    super('sale Wish no encontrado');
  }
}
