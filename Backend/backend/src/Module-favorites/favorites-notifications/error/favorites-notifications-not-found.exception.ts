import { NotFoundException } from '@nestjs/common';

export class FavoritesNotificationsNotFoundException extends NotFoundException {
  constructor() {
    super('favorites notifications no encontrado');
  }
}
