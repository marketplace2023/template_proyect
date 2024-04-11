import { NotFoundException } from '@nestjs/common';

export class productCategoryImageNotFoundException extends NotFoundException {
  constructor() {
    super('producto Category Image no encontrado');
  }
}
