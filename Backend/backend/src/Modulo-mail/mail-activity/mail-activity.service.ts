import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailActivity } from './entities/mail-activity.entity';
import { Repository } from 'typeorm';
import { CreateMailActivityDto } from './dto/create-mail-activity.dto';
import { MailActivityNotFoundException } from './error/mail-activity-not-found.exception';
import { UpdatedMailActivityDto } from './dto/updated-mail-activity.dto';

@Injectable()
export class MailActivityService {
  constructor(
    @InjectRepository(MailActivity)
    private readonly mailActivityRepository: Repository<MailActivity>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailActivity[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailActivity = await this.mailActivityRepository
      .createQueryBuilder('mailActivity')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailActivity;
  }

  async create(
    createMailActivityDto: CreateMailActivityDto,
  ): Promise<MailActivity> {
    const mailActivity = new MailActivity(createMailActivityDto);
    return await this.mailActivityRepository.save(mailActivity);
  }

  async findOne(id: number): Promise<MailActivity> {
    const mailActivity = await this.mailActivityRepository
      .createQueryBuilder('mailActivity')
      .where('mailActivity.id = :id', { id })
      .getOne();
    if (!mailActivity) {
      throw new MailActivityNotFoundException();
    }
    return mailActivity;
  }

  async updated(
    id: number,
    updatedMailActivityDto: UpdatedMailActivityDto,
  ): Promise<MailActivity> {
    const mailActivity = await this.mailActivityRepository
      .createQueryBuilder('mailActivity')
      .where('mailActivity.id = :id', { id })
      .getOne();
    if (!mailActivity) {
      throw new MailActivityNotFoundException();
    }
    Object.assign(mailActivity, updatedMailActivityDto);
    return await this.mailActivityRepository.save(mailActivity);
  }

  async deleted(id: number): Promise<void> {
    const mailActivity = await this.mailActivityRepository
      .createQueryBuilder('mailActivity')
      .where('mailActivity.id = :id', { id })
      .getOne();
    if (!mailActivity) {
      throw new MailActivityNotFoundException();
    }
    await this.mailActivityRepository.softRemove(mailActivity);
    console.log('mailActivity Eliminado');
  }
}
