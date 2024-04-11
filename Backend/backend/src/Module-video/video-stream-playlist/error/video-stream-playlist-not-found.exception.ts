import { NotFoundException } from '@nestjs/common';

export class VideoStreamPlaylistNotFoundException extends NotFoundException {
  constructor() {
    super('Video Stream playlist no encontrado');
  }
}
