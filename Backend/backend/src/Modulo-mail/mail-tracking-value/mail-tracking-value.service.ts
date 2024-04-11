import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailTrackingValue } from './entities/mail-tracking-value.entity';
import { Repository } from 'typeorm';
import { UpdatedMailTrackingValueDto } from './dto/updated-mail-tracking-value.dto';
import { MailTrackingValueNotFoundException } from './error/mail-tracking-value-not-found.exception';
import { CreateMailTrackingValueDto } from './dto/create-mail-tracking-value.dto';

@Injectable()
export class MailTrackingValueService {
  constructor(
    @InjectRepository(MailTrackingValue)
    private readonly mailTrackingValueRepository: Repository<MailTrackingValue>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailTrackingValue[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailTrackingValue = await this.mailTrackingValueRepository
      .createQueryBuilder('mailTrackingValue')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailTrackingValue;
  }

  async create(
    createMailTrackingValueDto: CreateMailTrackingValueDto,
  ): Promise<MailTrackingValue> {
    const mailTrackingValue = new MailTrackingValue(createMailTrackingValueDto);
    return await this.mailTrackingValueRepository.save(mailTrackingValue);
  }

  async findOne(id: number): Promise<MailTrackingValue> {
    const mailTrackingValue = await this.mailTrackingValueRepository
      .createQueryBuilder('mailTrackingValue')
      .where('mailTrackingValue.id = :id', { id })
      .getOne();
    if (!mailTrackingValue) {
      throw new MailTrackingValueNotFoundException();
    }
    return mailTrackingValue;
  }

  async updated(
    id: number,
    updatedMailTrackingValueDto: UpdatedMailTrackingValueDto,
  ): Promise<MailTrackingValue> {
    const mailTrackingValue = await this.mailTrackingValueRepository
      .createQueryBuilder('mailTrackingValue')
      .where('mailTrackingValue.id = :id', { id })
      .getOne();
    if (!mailTrackingValue) {
      throw new MailTrackingValueNotFoundException();
    }
    Object.assign(mailTrackingValue, updatedMailTrackingValueDto);
    return await this.mailTrackingValueRepository.save(mailTrackingValue);
  }

  async deleted(id: number): Promise<void> {
    const mailTrackingValue = await this.mailTrackingValueRepository
      .createQueryBuilder('mailTrackingValue')
      .where('mailTrackingValue.id = :id', { id })
      .getOne();
    if (!mailTrackingValue) {
      throw new MailTrackingValueNotFoundException();
    }
    await this.mailTrackingValueRepository.softRemove(mailTrackingValue);
    console.log('Mail Wizard Invite Eliminado');
  }
}
