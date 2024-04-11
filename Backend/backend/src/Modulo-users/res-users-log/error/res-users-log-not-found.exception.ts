import { NotFoundException } from '@nestjs/common';

export class ResUsersLogNotFoundException extends NotFoundException {
  constructor() {
    super('Usuario no encontrado');
  }
}
