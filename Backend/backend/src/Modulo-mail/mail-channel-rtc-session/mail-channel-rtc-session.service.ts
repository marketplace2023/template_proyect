import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailChannelRtcSession } from './entities/mail-channel-rtc-session.entity';
import { CreateMailChannelRtcSessionDto } from './dto/create-mail-channel-rtc-session.dto';
import { MailChannelRtcSessionNotFoundException } from './error/mail-channel-rtc-not-found.exception';
import { UpdatedMailChannelRtcSessionDto } from './dto/updated-mail-channel-rtc-session.dto';

@Injectable()
export class MailChannelRtcSessionService {
  constructor(
    @InjectRepository(MailChannelRtcSession)
    private readonly mailChannelRtcSessionRepository: Repository<MailChannelRtcSession>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailChannelRtcSession[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailChannelRtcSession = await this.mailChannelRtcSessionRepository
      .createQueryBuilder('mailChannelRtcSession')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailChannelRtcSession;
  }

  async create(
    createMailChannelRtcSessionDto: CreateMailChannelRtcSessionDto,
  ): Promise<MailChannelRtcSession> {
    const mailChannelRtcSession = new MailChannelRtcSession(
      createMailChannelRtcSessionDto,
    );
    return await this.mailChannelRtcSessionRepository.save(
      mailChannelRtcSession,
    );
  }

  async findOne(id: number): Promise<MailChannelRtcSession> {
    const mailChannelRtcSession = await this.mailChannelRtcSessionRepository
      .createQueryBuilder('mailChannelRtcSession')
      .where('mailChannelRtcSession.id = :id', { id })
      .getOne();
    if (!mailChannelRtcSession) {
      throw new MailChannelRtcSessionNotFoundException();
    }
    return mailChannelRtcSession;
  }

  async updated(
    id: number,
    updatedMailChannelRtcSessionDto: UpdatedMailChannelRtcSessionDto,
  ): Promise<MailChannelRtcSession> {
    const mailChannelRtcSession = await this.mailChannelRtcSessionRepository
      .createQueryBuilder('mailChannelRtcSession')
      .where('mailChannelRtcSession.id = :id', { id })
      .getOne();
    if (!mailChannelRtcSession) {
      throw new MailChannelRtcSessionNotFoundException();
    }
    Object.assign(mailChannelRtcSession, updatedMailChannelRtcSessionDto);
    return await this.mailChannelRtcSessionRepository.save(
      mailChannelRtcSession,
    );
  }

  async deleted(id: number): Promise<void> {
    const mailChannelRtcSession = await this.mailChannelRtcSessionRepository
      .createQueryBuilder('mailChannelRtcSession')
      .where('mailChannelRtcSession.id = :id', { id })
      .getOne();
    if (!mailChannelRtcSession) {
      throw new MailChannelRtcSessionNotFoundException();
    }
    await this.mailChannelRtcSessionRepository.softRemove(
      mailChannelRtcSession,
    );
    console.log('mailChannelRtcSession Eliminado');
  }
}
