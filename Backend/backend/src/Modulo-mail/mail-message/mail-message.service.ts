import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailMessage } from './entities/mail-message.entity';
import { Repository } from 'typeorm';
import { CreateMailMessageDto } from './dto/create-mail-message.dto';
import { MailMessageNotFoundException } from './error/mail-message-not-found.exception';
import { UpdatedMailMessageDto } from './dto/updated-mail-message.dto';

@Injectable()
export class MailMessageService {
  constructor(
    @InjectRepository(MailMessage)
    private readonly mailMessageRepository: Repository<MailMessage>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailMessage[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailMessage = await this.mailMessageRepository
      .createQueryBuilder('mailMessage')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailMessage;
  }

  async create(
    createMailMessageDto: CreateMailMessageDto,
  ): Promise<MailMessage> {
    const mailMessage = new MailMessage(createMailMessageDto);
    return await this.mailMessageRepository.save(mailMessage);
  }

  async findOne(id: number): Promise<MailMessage> {
    const mailMessage = await this.mailMessageRepository
      .createQueryBuilder('mailMessage')
      .where('mailMessage.id = :id', { id })
      .getOne();
    if (!mailMessage) {
      throw new MailMessageNotFoundException();
    }
    return mailMessage;
  }

  async updated(
    id: number,
    updatedMailMessageDto: UpdatedMailMessageDto,
  ): Promise<MailMessage> {
    const mailMessage = await this.mailMessageRepository
      .createQueryBuilder('mailMessage')
      .where('mailMessage.id = :id', { id })
      .getOne();
    if (!mailMessage) {
      throw new MailMessageNotFoundException();
    }
    Object.assign(mailMessage, updatedMailMessageDto);
    return await this.mailMessageRepository.save(mailMessage);
  }

  async deleted(id: number): Promise<void> {
    const mailMessage = await this.mailMessageRepository
      .createQueryBuilder('mailMessage')
      .where('mailMessage.id = :id', { id })
      .getOne();
    if (!mailMessage) {
      throw new MailMessageNotFoundException();
    }
    await this.mailMessageRepository.softRemove(mailMessage);
    console.log('mailMessage Eliminado');
  }
}
