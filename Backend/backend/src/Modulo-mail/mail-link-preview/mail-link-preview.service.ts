import { Injectable } from '@nestjs/common';
import { MailLinkPreviewNotFoundException } from './error/mail-link-preview-not-found.exception';
import { MailLinkPreview } from './entities/mail-link-preview.entity';
import { UpdatedMailLinkPreviewDto } from './dto/updated-mail-link-preview.dto';
import { CreateMailLinkPreviewDto } from './dto/create-mail-link-preview.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MailLinkPreviewService {
  constructor(
    @InjectRepository(MailLinkPreview)
    private readonly mailLinkPreviewRepository: Repository<MailLinkPreview>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailLinkPreview[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailLinkPreview = await this.mailLinkPreviewRepository
      .createQueryBuilder('mailLinkPreview')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailLinkPreview;
  }

  async create(
    createMailLinkPreviewDto: CreateMailLinkPreviewDto,
  ): Promise<MailLinkPreview> {
    const mailLinkPreview = new MailLinkPreview(createMailLinkPreviewDto);
    return await this.mailLinkPreviewRepository.save(mailLinkPreview);
  }

  async findOne(id: number): Promise<MailLinkPreview> {
    const mailLinkPreview = await this.mailLinkPreviewRepository
      .createQueryBuilder('mailLinkPreview')
      .where('mailLinkPreview.id = :id', { id })
      .getOne();
    if (!mailLinkPreview) {
      throw new MailLinkPreviewNotFoundException();
    }
    return mailLinkPreview;
  }

  async updated(
    id: number,
    updatedMailLinkPreviewDto: UpdatedMailLinkPreviewDto,
  ): Promise<MailLinkPreview> {
    const mailLinkPreview = await this.mailLinkPreviewRepository
      .createQueryBuilder('mailLinkPreview')
      .where('mailLinkPreview.id = :id', { id })
      .getOne();
    if (!mailLinkPreview) {
      throw new MailLinkPreviewNotFoundException();
    }
    Object.assign(mailLinkPreview, updatedMailLinkPreviewDto);
    return await this.mailLinkPreviewRepository.save(mailLinkPreview);
  }

  async deleted(id: number): Promise<void> {
    const mailLinkPreview = await this.mailLinkPreviewRepository
      .createQueryBuilder('mailLinkPreview')
      .where('mailLinkPreview.id = :id', { id })
      .getOne();
    if (!mailLinkPreview) {
      throw new MailLinkPreviewNotFoundException();
    }
    await this.mailLinkPreviewRepository.softRemove(mailLinkPreview);
    console.log('mailLinkPreview Eliminado');
  }
}
