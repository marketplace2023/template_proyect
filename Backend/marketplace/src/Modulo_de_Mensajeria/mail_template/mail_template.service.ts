import { Injectable } from '@nestjs/common';
import { CreateMailTemplateDto } from './dto/create-mail_template.dto';
import { UpdateMailTemplateDto } from './dto/update-mail_template.dto';

@Injectable()
export class MailTemplateService {
  create(createMailTemplateDto: CreateMailTemplateDto) {
    return 'This action adds a new mailTemplate';
  }

  findAll() {
    return `This action returns all mailTemplate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailTemplate`;
  }

  update(id: number, updateMailTemplateDto: UpdateMailTemplateDto) {
    return `This action updates a #${id} mailTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailTemplate`;
  }
}
