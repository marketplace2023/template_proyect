import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailMessageSubtypeNotFoundException } from './error/mail-message-subtype-not-found.exception';
import { UpdatedMailMessageSubtypeDto } from './dto/updated-mail-message-subtype.dto';
import { MailMessageSubtype } from './entities/mail-message-subtype.entity';
import { CreateMailMessageSubtypeDto } from './dto/create-mail-message-subtype.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MailMessageSubtypeService {
  constructor(
    @InjectRepository(MailMessageSubtype)
    private readonly mailMessageSubtypeRepository: Repository<MailMessageSubtype>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailMessageSubtype[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailMessageSubtype = await this.mailMessageSubtypeRepository
      .createQueryBuilder('mailMessageSubtype')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailMessageSubtype;
  }

  async create(
    createMailMessageSubtypeDto: CreateMailMessageSubtypeDto,
  ): Promise<MailMessageSubtype> {
    const mailMessageSubtype = new MailMessageSubtype(
      createMailMessageSubtypeDto,
    );
    return await this.mailMessageSubtypeRepository.save(mailMessageSubtype);
  }

  async findOne(id: number): Promise<MailMessageSubtype> {
    const mailMessageSubtype = await this.mailMessageSubtypeRepository
      .createQueryBuilder('mailMessageSubtype')
      .where('mailMessageSubtype.id = :id', { id })
      .getOne();
    if (!mailMessageSubtype) {
      throw new MailMessageSubtypeNotFoundException();
    }
    return mailMessageSubtype;
  }

  async updated(
    id: number,
    updatedMailMessageSubtypeDto: UpdatedMailMessageSubtypeDto,
  ): Promise<MailMessageSubtype> {
    const mailMessageSubtype = await this.mailMessageSubtypeRepository
      .createQueryBuilder('mailMessageSubtype')
      .where('mailMessageSubtype.id = :id', { id })
      .getOne();
    if (!mailMessageSubtype) {
      throw new MailMessageSubtypeNotFoundException();
    }
    Object.assign(mailMessageSubtype, updatedMailMessageSubtypeDto);
    return await this.mailMessageSubtypeRepository.save(mailMessageSubtype);
  }

  async deleted(id: number): Promise<void> {
    const mailMessageSubtype = await this.mailMessageSubtypeRepository
      .createQueryBuilder('mailMessageSubtype')
      .where('mailMessageSubtype.id = :id', { id })
      .getOne();
    if (!mailMessageSubtype) {
      throw new MailMessageSubtypeNotFoundException();
    }
    await this.mailMessageSubtypeRepository.softRemove(mailMessageSubtype);
    console.log('Mail Message Subtype Eliminado');
  }
}
