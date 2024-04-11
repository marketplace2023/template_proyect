import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailGuestNotFoundException } from './error/mail-guest-not-found.exception';
import { MailGuest } from './entities/mail-guest.entity';
import { UpdatedMailGuestDto } from './dto/updated-mail-guest.dto';
import { CreateMailGuestDto } from './dto/create-mail-guest.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MailGuestService {
  constructor(
    @InjectRepository(MailGuest)
    private readonly mailGuestRepository: Repository<MailGuest>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailGuest[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailGuest = await this.mailGuestRepository
      .createQueryBuilder('mailGuest')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailGuest;
  }

  async create(createMailGuestDto: CreateMailGuestDto): Promise<MailGuest> {
    const mailGuest = new MailGuest(createMailGuestDto);
    return await this.mailGuestRepository.save(mailGuest);
  }

  async findOne(id: number): Promise<MailGuest> {
    const mailGuest = await this.mailGuestRepository
      .createQueryBuilder('mailGuest')
      .where('mailGuest.id = :id', { id })
      .getOne();
    if (!mailGuest) {
      throw new MailGuestNotFoundException();
    }
    return mailGuest;
  }

  async updated(
    id: number,
    updatedMailGuestDto: UpdatedMailGuestDto,
  ): Promise<MailGuest> {
    const mailGuest = await this.mailGuestRepository
      .createQueryBuilder('mailGuest')
      .where('mailGuest.id = :id', { id })
      .getOne();
    if (!mailGuest) {
      throw new MailGuestNotFoundException();
    }
    Object.assign(mailGuest, updatedMailGuestDto);
    return await this.mailGuestRepository.save(mailGuest);
  }

  async deleted(id: number): Promise<void> {
    const mailGuest = await this.mailGuestRepository
      .createQueryBuilder('mailGuest')
      .where('mailGuest.id = :id', { id })
      .getOne();
    if (!mailGuest) {
      throw new MailGuestNotFoundException();
    }
    await this.mailGuestRepository.softRemove(mailGuest);
    console.log('mailGuest Eliminado');
  }
}
