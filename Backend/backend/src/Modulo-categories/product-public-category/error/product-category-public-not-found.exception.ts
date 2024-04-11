import { NotFoundException } from '@nestjs/common';

export class ProductPublicCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('ProductPublicCategory no encontrado');
  }
}
