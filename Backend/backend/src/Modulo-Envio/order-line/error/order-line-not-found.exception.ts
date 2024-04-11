import { NotFoundException } from '@nestjs/common';

export class OrderLineNotFoundException extends NotFoundException {
  constructor() {
    super('Order Line no encontrado');
  }
}
