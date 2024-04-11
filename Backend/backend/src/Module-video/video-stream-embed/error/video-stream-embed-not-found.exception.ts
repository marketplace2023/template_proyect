import { NotFoundException } from '@nestjs/common';

export class VideoStreamEmbedNotFoundException extends NotFoundException {
  constructor() {
    super('Video Stream Embed no encontrado');
  }
}
