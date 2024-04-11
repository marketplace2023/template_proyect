import { NotFoundException } from '@nestjs/common';

export class ResUsersNotFoundException extends NotFoundException {
  constructor() {
    super('Usuario no encontrado');
  }
}
