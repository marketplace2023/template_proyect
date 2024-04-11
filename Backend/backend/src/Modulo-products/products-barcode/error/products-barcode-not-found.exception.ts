import { NotFoundException } from '@nestjs/common';

export class ProductsBarcodeNotFoundException extends NotFoundException {
  constructor() {
    super('Products-barcode no encontrado');
  }
}
