import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailMailNotFoundException } from './error/mail-mail-not-found.exception';
import { UpdatedMailMailDto } from './dto/updated-mail-mail.dto';
import { MailMail } from './entities/mail-mail.entity';
import { CreateMailMailDto } from './dto/create-mail-mail.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MailMailService {
  constructor(
    @InjectRepository(MailMail)
    private readonly mailMailRepository: Repository<MailMail>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailMail[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailMail = await this.mailMailRepository
      .createQueryBuilder('mailMail')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailMail;
  }

  async create(createMailMailDto: CreateMailMailDto): Promise<MailMail> {
    const mailMail = new MailMail(createMailMailDto);
    return await this.mailMailRepository.save(mailMail);
  }

  async findOne(id: number): Promise<MailMail> {
    const mailMail = await this.mailMailRepository
      .createQueryBuilder('mailMail')
      .where('mailMail.id = :id', { id })
      .getOne();
    if (!mailMail) {
      throw new MailMailNotFoundException();
    }
    return mailMail;
  }

  async updated(
    id: number,
    updatedMailMailDto: UpdatedMailMailDto,
  ): Promise<MailMail> {
    const mailMail = await this.mailMailRepository
      .createQueryBuilder('mailMail')
      .where('mailMail.id = :id', { id })
      .getOne();
    if (!mailMail) {
      throw new MailMailNotFoundException();
    }
    Object.assign(mailMail, updatedMailMailDto);
    return await this.mailMailRepository.save(mailMail);
  }

  async deleted(id: number): Promise<void> {
    const mailMail = await this.mailMailRepository
      .createQueryBuilder('mailMail')
      .where('mailMail.id = :id', { id })
      .getOne();
    if (!mailMail) {
      throw new MailMailNotFoundException();
    }
    await this.mailMailRepository.softRemove(mailMail);
    console.log('mailMail Eliminado');
  }
}
