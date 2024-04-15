import { Injectable } from '@nestjs/common';
import { CreateMailShortcodeDto } from './dto/create-mail_shortcode.dto';
import { UpdateMailShortcodeDto } from './dto/update-mail_shortcode.dto';

@Injectable()
export class MailShortcodeService {
  create(createMailShortcodeDto: CreateMailShortcodeDto) {
    return 'This action adds a new mailShortcode';
  }

  findAll() {
    return `This action returns all mailShortcode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailShortcode`;
  }

  update(id: number, updateMailShortcodeDto: UpdateMailShortcodeDto) {
    return `This action updates a #${id} mailShortcode`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailShortcode`;
  }
}
