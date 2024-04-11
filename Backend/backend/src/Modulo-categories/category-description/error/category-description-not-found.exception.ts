import { NotFoundException } from '@nestjs/common';

export class CategoryDescriptionNotFoundException extends NotFoundException {
  constructor() {
    super('categoryDescription no encontrado');
  }
}
