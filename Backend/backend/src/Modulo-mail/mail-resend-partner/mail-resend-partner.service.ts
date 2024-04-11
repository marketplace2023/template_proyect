import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailResendPartnerNotFoundException } from './error/mail-resend-partner-not-found.exception';
import { UpdatedMailResendPartnerDto } from './dto/updated-mail-resend-partner.dto';
import { MailResendPartner } from './entities/mail-resend-partner.entity';
import { CreateMailResendPartnerDto } from './dto/create-mail-resend-partner.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MailResendPartnerService {
  constructor(
    @InjectRepository(MailResendPartner)
    private readonly mailResendPartnerRepository: Repository<MailResendPartner>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailResendPartner[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailResendPartner = await this.mailResendPartnerRepository
      .createQueryBuilder('mailResendPartner')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailResendPartner;
  }

  async create(
    createMailResendPartnerDto: CreateMailResendPartnerDto,
  ): Promise<MailResendPartner> {
    const mailResendPartner = new MailResendPartner(createMailResendPartnerDto);
    return await this.mailResendPartnerRepository.save(mailResendPartner);
  }

  async findOne(id: number): Promise<MailResendPartner> {
    const mailResendPartner = await this.mailResendPartnerRepository
      .createQueryBuilder('mailResendPartner')
      .where('mailResendPartner.id = :id', { id })
      .getOne();
    if (!mailResendPartner) {
      throw new MailResendPartnerNotFoundException();
    }
    return mailResendPartner;
  }

  async updated(
    id: number,
    updatedMailResendPartnerDto: UpdatedMailResendPartnerDto,
  ): Promise<MailResendPartner> {
    const mailResendPartner = await this.mailResendPartnerRepository
      .createQueryBuilder('mailResendPartner')
      .where('mailResendPartner.id = :id', { id })
      .getOne();
    if (!mailResendPartner) {
      throw new MailResendPartnerNotFoundException();
    }
    Object.assign(mailResendPartner, updatedMailResendPartnerDto);
    return await this.mailResendPartnerRepository.save(mailResendPartner);
  }

  async deleted(id: number): Promise<void> {
    const mailResendPartner = await this.mailResendPartnerRepository
      .createQueryBuilder('mailResendPartner')
      .where('mailResendPartner.id = :id', { id })
      .getOne();
    if (!mailResendPartner) {
      throw new MailResendPartnerNotFoundException();
    }
    await this.mailResendPartnerRepository.softRemove(mailResendPartner);
    console.log('mailResendPartner Eliminado');
  }
}
