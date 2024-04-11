import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailShortcodeNotFoundException } from './error/mail-shortcode-not-found.exception';
import { UpdatedMailShortcodeDto } from './dto/updated-mail-shortcode.dto';
import { MailShortcode } from './entities/mail-shortcode.entity';
import { CreateMailShortcodeDto } from './dto/create-mail-shortcode.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MailShortcodeService {
  constructor(
    @InjectRepository(MailShortcode)
    private readonly mailShortcodeRepository: Repository<MailShortcode>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailShortcode[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailShortcode = await this.mailShortcodeRepository
      .createQueryBuilder('mailShortcode')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailShortcode;
  }

  async create(
    createMailShortcodeDto: CreateMailShortcodeDto,
  ): Promise<MailShortcode> {
    const mailShortcode = new MailShortcode(createMailShortcodeDto);
    return await this.mailShortcodeRepository.save(mailShortcode);
  }

  async findOne(id: number): Promise<MailShortcode> {
    const mailShortcode = await this.mailShortcodeRepository
      .createQueryBuilder('mailShortcode')
      .where('mailShortcode.id = :id', { id })
      .getOne();
    if (!mailShortcode) {
      throw new MailShortcodeNotFoundException();
    }
    return mailShortcode;
  }

  async updated(
    id: number,
    updatedMailShortcodeDto: UpdatedMailShortcodeDto,
  ): Promise<MailShortcode> {
    const mailShortcode = await this.mailShortcodeRepository
      .createQueryBuilder('mailShortcode')
      .where('mailShortcode.id = :id', { id })
      .getOne();
    if (!mailShortcode) {
      throw new MailShortcodeNotFoundException();
    }
    Object.assign(mailShortcode, updatedMailShortcodeDto);
    return await this.mailShortcodeRepository.save(mailShortcode);
  }

  async deleted(id: number): Promise<void> {
    const mailShortcode = await this.mailShortcodeRepository
      .createQueryBuilder('mailShortcode')
      .where('mailShortcode.id = :id', { id })
      .getOne();
    if (!mailShortcode) {
      throw new MailShortcodeNotFoundException();
    }
    await this.mailShortcodeRepository.softRemove(mailShortcode);
    console.log('mail Shortcode Eliminado');
  }
}
