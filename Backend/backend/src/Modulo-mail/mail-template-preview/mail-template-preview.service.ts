import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailTemplatePreview } from './entities/mail-template-preview-entity';
import { Repository } from 'typeorm';
import { CreateMailTemplatePreviewDto } from './dto/create-mail-template-preview.dto';
import { MailTemplatePreviewNotFoundException } from './error/mail-template-preview-not-found.exception';
import { UpdatedMailTemplatePreviewDto } from './dto/updated-mail-template-preview.dto';

@Injectable()
export class MailTemplatePreviewService {
  constructor(
    @InjectRepository(MailTemplatePreview)
    private readonly mailTemplatePreviewRepository: Repository<MailTemplatePreview>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailTemplatePreview[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailTemplatePreview = await this.mailTemplatePreviewRepository
      .createQueryBuilder('mailTemplatePreview')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailTemplatePreview;
  }

  async create(
    createMailTemplatePreviewDto: CreateMailTemplatePreviewDto,
  ): Promise<MailTemplatePreview> {
    const mailTemplatePreview = new MailTemplatePreview(
      createMailTemplatePreviewDto,
    );
    return await this.mailTemplatePreviewRepository.save(mailTemplatePreview);
  }

  async findOne(id: number): Promise<MailTemplatePreview> {
    const mailTemplatePreview = await this.mailTemplatePreviewRepository
      .createQueryBuilder('mailTemplatePreview')
      .where('mailTemplatePreview.id = :id', { id })
      .getOne();
    if (!mailTemplatePreview) {
      throw new MailTemplatePreviewNotFoundException();
    }
    return mailTemplatePreview;
  }

  async updated(
    id: number,
    updatedMailTemplatePreviewDto: UpdatedMailTemplatePreviewDto,
  ): Promise<MailTemplatePreview> {
    const mailTemplatePreview = await this.mailTemplatePreviewRepository
      .createQueryBuilder('mailTemplatePreview')
      .where('mailTemplatePreview.id = :id', { id })
      .getOne();
    if (!mailTemplatePreview) {
      throw new MailTemplatePreviewNotFoundException();
    }
    Object.assign(mailTemplatePreview, updatedMailTemplatePreviewDto);
    return await this.mailTemplatePreviewRepository.save(mailTemplatePreview);
  }

  async deleted(id: number): Promise<void> {
    const mailTemplatePreview = await this.mailTemplatePreviewRepository
      .createQueryBuilder('mailTemplatePreview')
      .where('mailTemplatePreview.id = :id', { id })
      .getOne();
    if (!mailTemplatePreview) {
      throw new MailTemplatePreviewNotFoundException();
    }
    await this.mailTemplatePreviewRepository.softRemove(mailTemplatePreview);
    console.log('Mail template preview Eliminado');
  }
}
