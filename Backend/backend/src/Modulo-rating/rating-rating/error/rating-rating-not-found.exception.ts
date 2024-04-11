import { NotFoundException } from '@nestjs/common';

export class RatingRatingNotFoundException extends NotFoundException {
  constructor() {
    super('RatingRating no encontrado');
  }
}
