import { NotFoundException } from '@nestjs/common';

export class MailShortcodeNotFoundException extends NotFoundException {
  constructor() {
    super('Mail Shortcode no encontrado');
  }
}
