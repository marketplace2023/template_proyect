import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailNotification } from './entities/mail-notification.entity';
import { Repository } from 'typeorm';
import { CreateMailNotificationDto } from './dto/create-mail-notification.dto';
import { MailNotificationNotFoundException } from './error/mail-notification-not-found.exception';
import { UpdatedMailNotificationDto } from './dto/updated-mail-notification.dto';

@Injectable()
export class MailNotificationService {
  constructor(
    @InjectRepository(MailNotification)
    private readonly mailNotificationRepository: Repository<MailNotification>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailNotification[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailNotification = await this.mailNotificationRepository
      .createQueryBuilder('mailNotification')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailNotification;
  }

  async create(
    createMailNotificationDto: CreateMailNotificationDto,
  ): Promise<MailNotification> {
    const mailNotification = new MailNotification(createMailNotificationDto);
    return await this.mailNotificationRepository.save(mailNotification);
  }

  async findOne(id: number): Promise<MailNotification> {
    const mailNotification = await this.mailNotificationRepository
      .createQueryBuilder('mailNotification')
      .where('mailNotification.id = :id', { id })
      .getOne();
    if (!mailNotification) {
      throw new MailNotificationNotFoundException();
    }
    return mailNotification;
  }

  async updated(
    id: number,
    updatedMailNotificationDto: UpdatedMailNotificationDto,
  ): Promise<MailNotification> {
    const mailNotification = await this.mailNotificationRepository
      .createQueryBuilder('mailNotification')
      .where('mailNotification.id = :id', { id })
      .getOne();
    if (!mailNotification) {
      throw new MailNotificationNotFoundException();
    }
    Object.assign(mailNotification, updatedMailNotificationDto);
    return await this.mailNotificationRepository.save(mailNotification);
  }

  async deleted(id: number): Promise<void> {
    const mailNotification = await this.mailNotificationRepository
      .createQueryBuilder('mailNotification')
      .where('mailNotification.id = :id', { id })
      .getOne();
    if (!mailNotification) {
      throw new MailNotificationNotFoundException();
    }
    await this.mailNotificationRepository.softRemove(mailNotification);
    console.log('mailNotification Eliminado');
  }
}
