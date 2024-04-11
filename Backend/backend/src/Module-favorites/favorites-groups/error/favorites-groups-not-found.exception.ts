import { NotFoundException } from '@nestjs/common';

export class FavoritesGroupsNotFoundException extends NotFoundException {
  constructor() {
    super('favorites groups no encontrado');
  }
}
