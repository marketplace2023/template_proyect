import { NotFoundException } from '@nestjs/common';

export class SellerRatingLineNotFoundException extends NotFoundException {
  constructor() {
    super('Seller Rating Line no encontrado');
  }
}
