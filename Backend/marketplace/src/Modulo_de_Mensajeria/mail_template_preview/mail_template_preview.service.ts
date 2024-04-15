import { Injectable } from '@nestjs/common';
import { CreateMailTemplatePreviewDto } from './dto/create-mail_template_preview.dto';
import { UpdateMailTemplatePreviewDto } from './dto/update-mail_template_preview.dto';

@Injectable()
export class MailTemplatePreviewService {
  create(createMailTemplatePreviewDto: CreateMailTemplatePreviewDto) {
    return 'This action adds a new mailTemplatePreview';
  }

  findAll() {
    return `This action returns all mailTemplatePreview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailTemplatePreview`;
  }

  update(id: number, updateMailTemplatePreviewDto: UpdateMailTemplatePreviewDto) {
    return `This action updates a #${id} mailTemplatePreview`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailTemplatePreview`;
  }
}
