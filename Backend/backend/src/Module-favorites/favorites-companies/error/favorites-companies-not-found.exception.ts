import { NotFoundException } from '@nestjs/common';

export class FavoritesCompaniesNotFoundException extends NotFoundException {
  constructor() {
    super('favorites companies no encontrado');
  }
}
