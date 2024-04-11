import { NotFoundException } from '@nestjs/common';

export class DeliveryMethodNotFoundException extends NotFoundException {
  constructor() {
    super('delivery Method no encontrado');
  }
}
