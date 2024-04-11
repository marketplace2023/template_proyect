import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailAliasNotFoundException } from './error/mail-alias-not-found.exception';
import { UpdatedMailAliasDto } from './dto/updated-mail-alias.dto';
import { MailAlias } from './entities/mail-alias.entity';
import { CreateMailAliasDto } from './dto/create-mail-alias.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MailAliasService {
  constructor(
    @InjectRepository(MailAlias)
    private readonly mailAliasRepository: Repository<MailAlias>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailAlias[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailAlias = await this.mailAliasRepository
      .createQueryBuilder('mailAlias')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailAlias;
  }

  async create(createMailAliasDto: CreateMailAliasDto): Promise<MailAlias> {
    const mailAlias = new MailAlias(createMailAliasDto);
    return await this.mailAliasRepository.save(mailAlias);
  }

  async findOne(id: number): Promise<MailAlias> {
    const mailAlias = await this.mailAliasRepository
      .createQueryBuilder('mailAlias')
      .where('mailAlias.id = :id', { id })
      .getOne();
    if (!mailAlias) {
      throw new MailAliasNotFoundException();
    }
    return mailAlias;
  }

  async updated(
    id: number,
    updatedMailAliasDto: UpdatedMailAliasDto,
  ): Promise<MailAlias> {
    const mailAlias = await this.mailAliasRepository
      .createQueryBuilder('mailAlias')
      .where('mailAlias.id = :id', { id })
      .getOne();
    if (!mailAlias) {
      throw new MailAliasNotFoundException();
    }
    Object.assign(mailAlias, updatedMailAliasDto);
    return await this.mailAliasRepository.save(mailAlias);
  }

  async deleted(id: number): Promise<void> {
    const mailAlias = await this.mailAliasRepository
      .createQueryBuilder('mailAlias')
      .where('mailAlias.id = :id', { id })
      .getOne();
    if (!mailAlias) {
      throw new MailAliasNotFoundException();
    }
    await this.mailAliasRepository.softRemove(mailAlias);
    console.log('mailAlias Eliminado');
  }
}
