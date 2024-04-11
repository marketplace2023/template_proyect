import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailTemplate } from './entities/mail-template-preview-entity';
import { Repository } from 'typeorm';
import { CreateMailTemplateDto } from './dto/create-mail-template.dto';
import { MailTemplateNotFoundException } from './error/mail-template-preview-not-found.exception';
import { UpdatedMailTemplateDto } from './dto/updated-mail-template.dto';

@Injectable()
export class MailTemplateService {
  constructor(
    @InjectRepository(MailTemplate)
    private readonly mailTemplateRepository: Repository<MailTemplate>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailTemplate[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailTemplate = await this.mailTemplateRepository
      .createQueryBuilder('mailTemplate')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailTemplate;
  }

  async create(
    createMailTemplateDto: CreateMailTemplateDto,
  ): Promise<MailTemplate> {
    const mailTemplate = new MailTemplate(createMailTemplateDto);
    return await this.mailTemplateRepository.save(mailTemplate);
  }

  async findOne(id: number): Promise<MailTemplate> {
    const mailTemplate = await this.mailTemplateRepository
      .createQueryBuilder('mailTemplate')
      .where('mailTemplate.id = :id', { id })
      .getOne();
    if (!mailTemplate) {
      throw new MailTemplateNotFoundException();
    }
    return mailTemplate;
  }

  async updated(
    id: number,
    updatedMailTemplateDto: UpdatedMailTemplateDto,
  ): Promise<MailTemplate> {
    const mailTemplate = await this.mailTemplateRepository
      .createQueryBuilder('mailTemplate')
      .where('mailTemplate.id = :id', { id })
      .getOne();
    if (!mailTemplate) {
      throw new MailTemplateNotFoundException();
    }
    Object.assign(mailTemplate, updatedMailTemplateDto);
    return await this.mailTemplateRepository.save(mailTemplate);
  }

  async deleted(id: number): Promise<void> {
    const mailTemplate = await this.mailTemplateRepository
      .createQueryBuilder('mailTemplate')
      .where('mailTemplate.id = :id', { id })
      .getOne();
    if (!mailTemplate) {
      throw new MailTemplateNotFoundException();
    }
    await this.mailTemplateRepository.softRemove(mailTemplate);
    console.log('Mail template Eliminado');
  }
}
