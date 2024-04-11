import { NotFoundException } from '@nestjs/common';

export class SellerRatingSettingsNotFoundException extends NotFoundException {
  constructor() {
    super('Seller Rating Settings no encontrado');
  }
}
