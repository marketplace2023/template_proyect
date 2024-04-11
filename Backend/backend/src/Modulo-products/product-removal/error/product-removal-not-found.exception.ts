import { NotFoundException } from '@nestjs/common';

export class ProductRemovalNotFoundException extends NotFoundException {
  constructor() {
    super('ProductRemoval no encontrado');
  }
}
