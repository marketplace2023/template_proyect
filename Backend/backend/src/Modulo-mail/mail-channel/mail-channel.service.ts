import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailChannel } from './entities/mail-channel.entity';
import { Repository } from 'typeorm';
import { CreateMailChannelDto } from './dto/create-mail-channel.dto';
import { MailChannelNotFoundException } from './error/mail-channel-not-found.exception';
import { UpdatedMailChannelDto } from './dto/updated-mail-channel-dto';

@Injectable()
export class MailChannelService {
  constructor(
    @InjectRepository(MailChannel)
    private readonly mailChannelRepository: Repository<MailChannel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailChannel[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailChannel = await this.mailChannelRepository
      .createQueryBuilder('mailChannel')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailChannel;
  }

  async create(
    createMailChannelDto: CreateMailChannelDto,
  ): Promise<MailChannel> {
    const mailChannel = new MailChannel(createMailChannelDto);
    return await this.mailChannelRepository.save(mailChannel);
  }

  async findOne(id: number): Promise<MailChannel> {
    const mailChannel = await this.mailChannelRepository
      .createQueryBuilder('mailChannel')
      .where('mailChannel.id = :id', { id })
      .getOne();
    if (!mailChannel) {
      throw new MailChannelNotFoundException();
    }
    return mailChannel;
  }

  async updated(
    id: number,
    updatedMailChannelDto: UpdatedMailChannelDto,
  ): Promise<MailChannel> {
    const mailChannel = await this.mailChannelRepository
      .createQueryBuilder('mailChannel')
      .where('mailChannel.id = :id', { id })
      .getOne();
    if (!mailChannel) {
      throw new MailChannelNotFoundException();
    }
    Object.assign(mailChannel, updatedMailChannelDto);
    return await this.mailChannelRepository.save(mailChannel);
  }

  async deleted(id: number): Promise<void> {
    const mailChannel = await this.mailChannelRepository
      .createQueryBuilder('mailChannel')
      .where('mailChannel.id = :id', { id })
      .getOne();
    if (!mailChannel) {
      throw new MailChannelNotFoundException();
    }
    await this.mailChannelRepository.softRemove(mailChannel);
    console.log('mailChannel Eliminado');
  }
}
