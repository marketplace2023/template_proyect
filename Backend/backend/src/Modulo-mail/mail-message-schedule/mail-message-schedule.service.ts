import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailMessageScheduleNotFoundException } from './error/mail-message-schedule-not-found.exception';
import { UpdatedMailMessageScheduleDto } from './dto/updated-mail-message-schedule.dto';
import { MailMessageSchedule } from './entities/mail-message-schedule.entity';
import { CreateMailMessageScheduleDto } from './dto/create-mail-message-schedule.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MailMessageScheduleService {
  constructor(
    @InjectRepository(MailMessageSchedule)
    private readonly mailMessageScheduleRepository: Repository<MailMessageSchedule>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailMessageSchedule[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailMessageSchedule = await this.mailMessageScheduleRepository
      .createQueryBuilder('mailMessageSchedule')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailMessageSchedule;
  }

  async create(
    createMailMessageScheduleDto: CreateMailMessageScheduleDto,
  ): Promise<MailMessageSchedule> {
    const mailMessageSchedule = new MailMessageSchedule(
      createMailMessageScheduleDto,
    );
    return await this.mailMessageScheduleRepository.save(mailMessageSchedule);
  }

  async findOne(id: number): Promise<MailMessageSchedule> {
    const mailMessageSchedule = await this.mailMessageScheduleRepository
      .createQueryBuilder('mailMessageSchedule')
      .where('mailMessageSchedule.id = :id', { id })
      .getOne();
    if (!mailMessageSchedule) {
      throw new MailMessageScheduleNotFoundException();
    }
    return mailMessageSchedule;
  }

  async updated(
    id: number,
    updatedMailMessageScheduleDto: UpdatedMailMessageScheduleDto,
  ): Promise<MailMessageSchedule> {
    const mailMessageSchedule = await this.mailMessageScheduleRepository
      .createQueryBuilder('mailMessageSchedule')
      .where('mailMessageSchedule.id = :id', { id })
      .getOne();
    if (!mailMessageSchedule) {
      throw new MailMessageScheduleNotFoundException();
    }
    Object.assign(mailMessageSchedule, updatedMailMessageScheduleDto);
    return await this.mailMessageScheduleRepository.save(mailMessageSchedule);
  }

  async deleted(id: number): Promise<void> {
    const mailMessageSchedule = await this.mailMessageScheduleRepository
      .createQueryBuilder('mailMessageSchedule')
      .where('mailMessageSchedule.id = :id', { id })
      .getOne();
    if (!mailMessageSchedule) {
      throw new MailMessageScheduleNotFoundException();
    }
    await this.mailMessageScheduleRepository.softRemove(mailMessageSchedule);
    console.log('mailMessageSchedule Eliminado');
  }
}
