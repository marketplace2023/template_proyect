import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailComposeMessageNotFoundException } from './error/mail-compose-message-not-found.exception';
import { MailComposeMessage } from './entities/mail-compose-message.entity';
import { UpdatedMailComposeMessageDto } from './dto/updated-mail-compose-message.dto';
import { CreateMailComposeMessageDto } from './dto/create-mail-compose-message.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MailComposeMessageService {
  constructor(
    @InjectRepository(MailComposeMessage)
    private readonly mailComposeMessageRepository: Repository<MailComposeMessage>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailComposeMessage[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailComposeMessage = await this.mailComposeMessageRepository
      .createQueryBuilder('mailComposeMessage')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailComposeMessage;
  }

  async create(
    createMailComposeMessageDto: CreateMailComposeMessageDto,
  ): Promise<MailComposeMessage> {
    const mailComposeMessage = new MailComposeMessage(
      createMailComposeMessageDto,
    );
    return await this.mailComposeMessageRepository.save(mailComposeMessage);
  }

  async findOne(id: number): Promise<MailComposeMessage> {
    const mailComposeMessage = await this.mailComposeMessageRepository
      .createQueryBuilder('mailComposeMessage')
      .where('mailComposeMessage.id = :id', { id })
      .getOne();
    if (!mailComposeMessage) {
      throw new MailComposeMessageNotFoundException();
    }
    return mailComposeMessage;
  }

  async updated(
    id: number,
    updatedMailComposeMessageDto: UpdatedMailComposeMessageDto,
  ): Promise<MailComposeMessage> {
    const mailComposeMessage = await this.mailComposeMessageRepository
      .createQueryBuilder('mailComposeMessage')
      .where('mailComposeMessage.id = :id', { id })
      .getOne();
    if (!mailComposeMessage) {
      throw new MailComposeMessageNotFoundException();
    }
    Object.assign(mailComposeMessage, updatedMailComposeMessageDto);
    return await this.mailComposeMessageRepository.save(mailComposeMessage);
  }

  async deleted(id: number): Promise<void> {
    const mailComposeMessage = await this.mailComposeMessageRepository
      .createQueryBuilder('mailComposeMessage')
      .where('mailComposeMessage.id = :id', { id })
      .getOne();
    if (!mailComposeMessage) {
      throw new MailComposeMessageNotFoundException();
    }
    await this.mailComposeMessageRepository.softRemove(mailComposeMessage);
    console.log('mail Compose Message Eliminado');
  }
}
