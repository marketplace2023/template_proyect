import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailBlacklistRemove } from './entities/mail-blacklist-remove-not-found.exception';
import { CreateMailBlacklistRemoveDto } from './dto/create-mail-blacklist-remove.dto';
import { MailBlacklistRemoveNotFoundException } from './error/mail-blacklist-remove-not-found.exception';
import { UpdatedMailBlacklistRemoveDto } from './dto/updated-mail-blacklist-remove.dto';

@Injectable()
export class MailBlacklistRemoveRemoveService {
  constructor(
    @InjectRepository(MailBlacklistRemove)
    private readonly mailBlacklistRemoveRepository: Repository<MailBlacklistRemove>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailBlacklistRemove[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailBlacklistRemove = await this.mailBlacklistRemoveRepository
      .createQueryBuilder('mailBlacklistRemove')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailBlacklistRemove;
  }

  async create(
    createMailBlacklistRemoveDto: CreateMailBlacklistRemoveDto,
  ): Promise<MailBlacklistRemove> {
    const mailBlacklistRemove = new MailBlacklistRemove(
      createMailBlacklistRemoveDto,
    );
    return await this.mailBlacklistRemoveRepository.save(mailBlacklistRemove);
  }

  async findOne(id: number): Promise<MailBlacklistRemove> {
    const mailBlacklistRemove = await this.mailBlacklistRemoveRepository
      .createQueryBuilder('mailBlacklistRemove')
      .where('mailBlacklistRemove.id = :id', { id })
      .getOne();
    if (!mailBlacklistRemove) {
      throw new MailBlacklistRemoveNotFoundException();
    }
    return mailBlacklistRemove;
  }

  async updated(
    id: number,
    updatedMailBlacklistRemoveDto: UpdatedMailBlacklistRemoveDto,
  ): Promise<MailBlacklistRemove> {
    const mailBlacklistRemove = await this.mailBlacklistRemoveRepository
      .createQueryBuilder('mailBlacklistRemove')
      .where('mailBlacklistRemove.id = :id', { id })
      .getOne();
    if (!mailBlacklistRemove) {
      throw new MailBlacklistRemoveNotFoundException();
    }
    Object.assign(mailBlacklistRemove, updatedMailBlacklistRemoveDto);
    return await this.mailBlacklistRemoveRepository.save(mailBlacklistRemove);
  }

  async deleted(id: number): Promise<void> {
    const mailBlacklistRemove = await this.mailBlacklistRemoveRepository
      .createQueryBuilder('mailBlacklistRemove')
      .where('mailBlacklistRemove.id = :id', { id })
      .getOne();
    if (!mailBlacklistRemove) {
      throw new MailBlacklistRemoveNotFoundException();
    }
    await this.mailBlacklistRemoveRepository.softRemove(mailBlacklistRemove);
    console.log('mailBlacklistRemove Eliminado');
  }
}
