import { NotFoundException } from '@nestjs/common';

export class RatingTagNotFoundException extends NotFoundException {
  constructor() {
    super('Rating Tag no encontrado');
  }
}
