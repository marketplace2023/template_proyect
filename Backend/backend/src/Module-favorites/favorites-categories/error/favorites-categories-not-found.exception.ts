import { NotFoundException } from '@nestjs/common';

export class FavoritesCategoriesNotFoundException extends NotFoundException {
  constructor() {
    super('favorites categories no encontrado');
  }
}
