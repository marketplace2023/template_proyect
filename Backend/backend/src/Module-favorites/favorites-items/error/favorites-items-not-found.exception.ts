import { NotFoundException } from '@nestjs/common';

export class FavoritesItemsNotFoundException extends NotFoundException {
  constructor() {
    super('favorites items no encontrado');
  }
}
