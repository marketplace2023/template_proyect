import { NotFoundException } from '@nestjs/common';

export class SellerRatingNotFoundException extends NotFoundException {
  constructor() {
    super('Seller Rating no encontrado');
  }
}
