import { NotFoundException } from '@nestjs/common';

export class ResUsersSettingsVolumesNotFoundException extends NotFoundException {
  constructor() {
    super('Res Users Settings Volumes no encontrado');
  }
}
