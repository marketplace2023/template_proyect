import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailActivityTypeNotFoundException } from './error/mail-activity-not-found.exception';
import { MailActivityType } from './entities/mail-activity.entity';
import { Repository } from 'typeorm';
import { UpdatedMailActivityTypeDto } from './dto/updated-mail-activity-type.dto';
import { CreateMailActivityTypeDto } from './dto/create-mail-activity-type.dto';

@Injectable()
export class MailActivityTypeService {
  constructor(
    @InjectRepository(MailActivityType)
    private readonly mailActivityTypeRepository: Repository<MailActivityType>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailActivityType[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailActivityType = await this.mailActivityTypeRepository
      .createQueryBuilder('mailActivityType')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailActivityType;
  }

  async create(
    createMailActivityTypeDto: CreateMailActivityTypeDto,
  ): Promise<MailActivityType> {
    const mailActivityType = new MailActivityType(createMailActivityTypeDto);
    return await this.mailActivityTypeRepository.save(mailActivityType);
  }

  async findOne(id: number): Promise<MailActivityType> {
    const mailActivityType = await this.mailActivityTypeRepository
      .createQueryBuilder('mailActivityType')
      .where('mailActivityType.id = :id', { id })
      .getOne();
    if (!mailActivityType) {
      throw new MailActivityTypeNotFoundException();
    }
    return mailActivityType;
  }

  async updated(
    id: number,
    updatedMailActivityTypeDto: UpdatedMailActivityTypeDto,
  ): Promise<MailActivityType> {
    const mailActivityType = await this.mailActivityTypeRepository
      .createQueryBuilder('mailActivityType')
      .where('mailActivityType.id = :id', { id })
      .getOne();
    if (!mailActivityType) {
      throw new MailActivityTypeNotFoundException();
    }
    Object.assign(mailActivityType, updatedMailActivityTypeDto);
    return await this.mailActivityTypeRepository.save(mailActivityType);
  }

  async deleted(id: number): Promise<void> {
    const mailActivityType = await this.mailActivityTypeRepository
      .createQueryBuilder('mailActivityType')
      .where('mailActivityType.id = :id', { id })
      .getOne();
    if (!mailActivityType) {
      throw new MailActivityTypeNotFoundException();
    }
    await this.mailActivityTypeRepository.softRemove(mailActivityType);
    console.log('mailActivityType Eliminado');
  }
}
