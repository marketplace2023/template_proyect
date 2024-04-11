import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailResendMessageNotFoundException } from './error/mail-resend-message-not-found.exception';
import { MailResendMessage } from './entities/mail-resend-message.entity';
import { UpdatedMailResendMessageDto } from './dto/updated-mail-resend-message.dto';
import { CreateMailResendMessageDto } from './dto/create-mail-resend-message.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MailResendMessageService {
  constructor(
    @InjectRepository(MailResendMessage)
    private readonly mailResendMessageRepository: Repository<MailResendMessage>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailResendMessage[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailResendMessage = await this.mailResendMessageRepository
      .createQueryBuilder('mailResendMessage')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailResendMessage;
  }

  async create(
    createMailResendMessageDto: CreateMailResendMessageDto,
  ): Promise<MailResendMessage> {
    const mailResendMessage = new MailResendMessage(createMailResendMessageDto);
    return await this.mailResendMessageRepository.save(mailResendMessage);
  }

  async findOne(id: number): Promise<MailResendMessage> {
    const mailResendMessage = await this.mailResendMessageRepository
      .createQueryBuilder('mailResendMessage')
      .where('mailResendMessage.id = :id', { id })
      .getOne();
    if (!mailResendMessage) {
      throw new MailResendMessageNotFoundException();
    }
    return mailResendMessage;
  }

  async updated(
    id: number,
    updatedMailResendMessageDto: UpdatedMailResendMessageDto,
  ): Promise<MailResendMessage> {
    const mailResendMessage = await this.mailResendMessageRepository
      .createQueryBuilder('mailResendMessage')
      .where('mailResendMessage.id = :id', { id })
      .getOne();
    if (!mailResendMessage) {
      throw new MailResendMessageNotFoundException();
    }
    Object.assign(mailResendMessage, updatedMailResendMessageDto);
    return await this.mailResendMessageRepository.save(mailResendMessage);
  }

  async deleted(id: number): Promise<void> {
    const mailResendMessage = await this.mailResendMessageRepository
      .createQueryBuilder('mailResendMessage')
      .where('mailResendMessage.id = :id', { id })
      .getOne();
    if (!mailResendMessage) {
      throw new MailResendMessageNotFoundException();
    }
    await this.mailResendMessageRepository.softRemove(mailResendMessage);
    console.log('mailResendMessage Eliminado');
  }
}
