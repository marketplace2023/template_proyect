import { NotFoundException } from '@nestjs/common';

export class VideoStreamRatingNotFoundException extends NotFoundException {
  constructor() {
    super('Video Stream Rating no encontrado');
  }
}
