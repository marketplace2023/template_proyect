import { NotFoundException } from '@nestjs/common';

export class FavoritesUsersNotFoundException extends NotFoundException {
  constructor() {
    super('favorites users no encontrado');
  }
}
