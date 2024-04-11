import { NotFoundException } from '@nestjs/common';

export class FavoritesLocationsNotFoundException extends NotFoundException {
  constructor() {
    super('favorites locations no encontrado');
  }
}
