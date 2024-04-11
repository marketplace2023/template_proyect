import { NotFoundException } from '@nestjs/common';

export class RatingImageNotFoundException extends NotFoundException {
  constructor() {
    super('Rating Image no encontrado');
  }
}
