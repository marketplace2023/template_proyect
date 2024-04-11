import { NotFoundException } from '@nestjs/common';

export class DeliveryPackageNotFoundException extends NotFoundException {
  constructor() {
    super('delivery Package no encontrado');
  }
}
