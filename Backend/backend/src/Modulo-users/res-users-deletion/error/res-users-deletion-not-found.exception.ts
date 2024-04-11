import { NotFoundException } from '@nestjs/common';

export class ResUsersDeletionNotFoundException extends NotFoundException {
  constructor() {
    super('Res Users Deletion no encontrado');
  }
}
