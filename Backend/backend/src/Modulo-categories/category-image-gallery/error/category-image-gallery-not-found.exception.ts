import { NotFoundException } from '@nestjs/common';

export class CategoryImageGalleryNotFoundException extends NotFoundException {
  constructor() {
    super('Category Image Gallery no encontrado');
  }
}
