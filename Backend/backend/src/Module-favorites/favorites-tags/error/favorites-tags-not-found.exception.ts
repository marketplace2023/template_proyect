import { NotFoundException } from '@nestjs/common';

export class FavoritesTagsNotFoundException extends NotFoundException {
  constructor() {
    super('favorites tags no encontrado');
  }
}
