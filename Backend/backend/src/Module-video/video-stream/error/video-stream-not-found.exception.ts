import { NotFoundException } from '@nestjs/common';

export class VideoStreamNotFoundException extends NotFoundException {
  constructor() {
    super('Video Stream no encontrado');
  }
}
