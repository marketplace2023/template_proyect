import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailBlacklist } from './entities/mail-blacklist.entity';
import { MailBlacklistNotFoundException } from './error/mail-blacklist-not-found.exception';
import { CreateMailBlacklistDto } from './dto/create-mail-blacklist.dto';
import { UpdatedMailBlacklistDto } from './dto/updated-mail-blacklist.dto';

@Injectable()
export class MailBlacklistService {
  constructor(
    @InjectRepository(MailBlacklist)
    private readonly mailBlacklistRepository: Repository<MailBlacklist>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailBlacklist[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailBlacklist = await this.mailBlacklistRepository
      .createQueryBuilder('mailBlacklist')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailBlacklist;
  }

  async create(
    createMailBlacklistDto: CreateMailBlacklistDto,
  ): Promise<MailBlacklist> {
    const mailBlacklist = new MailBlacklist(createMailBlacklistDto);
    return await this.mailBlacklistRepository.save(mailBlacklist);
  }

  async findOne(id: number): Promise<MailBlacklist> {
    const mailBlacklist = await this.mailBlacklistRepository
      .createQueryBuilder('mailBlacklist')
      .where('mailBlacklist.id = :id', { id })
      .getOne();
    if (!mailBlacklist) {
      throw new MailBlacklistNotFoundException();
    }
    return mailBlacklist;
  }

  async updated(
    id: number,
    updatedMailBlacklistDto: UpdatedMailBlacklistDto,
  ): Promise<MailBlacklist> {
    const mailBlacklist = await this.mailBlacklistRepository
      .createQueryBuilder('mailBlacklist')
      .where('mailBlacklist.id = :id', { id })
      .getOne();
    if (!mailBlacklist) {
      throw new MailBlacklistNotFoundException();
    }
    Object.assign(mailBlacklist, updatedMailBlacklistDto);
    return await this.mailBlacklistRepository.save(mailBlacklist);
  }

  async deleted(id: number): Promise<void> {
    const mailBlacklist = await this.mailBlacklistRepository
      .createQueryBuilder('mailBlacklist')
      .where('mailBlacklist.id = :id', { id })
      .getOne();
    if (!mailBlacklist) {
      throw new MailBlacklistNotFoundException();
    }
    await this.mailBlacklistRepository.softRemove(mailBlacklist);
    console.log('mailBlacklist Eliminado');
  }
}
