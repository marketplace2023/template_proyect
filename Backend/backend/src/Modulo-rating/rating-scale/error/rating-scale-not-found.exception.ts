import { NotFoundException } from '@nestjs/common';

export class RatingScaleNotFoundException extends NotFoundException {
  constructor() {
    super('Rating Scale no encontrado');
  }
}
