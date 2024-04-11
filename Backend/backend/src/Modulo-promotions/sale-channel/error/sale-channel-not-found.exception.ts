import { NotFoundException } from '@nestjs/common';

export class SaleChannelNotFoundException extends NotFoundException {
  constructor() {
    super('sale Channel no encontrado');
  }
}
