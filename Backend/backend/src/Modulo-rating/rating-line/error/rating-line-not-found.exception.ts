import { NotFoundException } from '@nestjs/common';

export class RatingLineNotFoundException extends NotFoundException {
  constructor() {
    super('Rating Line no encontrado');
  }
}
