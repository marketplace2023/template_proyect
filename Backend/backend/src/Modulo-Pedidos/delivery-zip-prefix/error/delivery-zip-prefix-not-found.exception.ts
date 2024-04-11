import { NotFoundException } from '@nestjs/common';

export class DeliveryZipPrefixNotFoundException extends NotFoundException {
  constructor() {
    super('delivery zip prefix rule no encontrado');
  }
}
