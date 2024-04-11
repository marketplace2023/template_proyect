import { NotFoundException } from '@nestjs/common';

export class FavoritesNotFoundException extends NotFoundException {
  constructor() {
    super('favorites no encontrado');
  }
}
