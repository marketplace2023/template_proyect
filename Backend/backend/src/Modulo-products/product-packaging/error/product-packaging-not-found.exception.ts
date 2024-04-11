import { NotFoundException } from '@nestjs/common';

export class ProductPackagingNotFoundException extends NotFoundException {
  constructor() {
    super('ProductPackaging no encontrado');
  }
}
