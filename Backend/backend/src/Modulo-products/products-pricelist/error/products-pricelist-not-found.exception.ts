import { NotFoundException } from '@nestjs/common';

export class ProductsPrincelistNotFoundException extends NotFoundException {
  constructor() {
    super('Products-Princelist no encontrado');
  }
}
