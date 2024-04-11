import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailChannelMember } from './entities/mail-channel-member-not-found.exception';
import { Repository } from 'typeorm';
import { CreateMailChannelMemberDto } from './dto/create-mail-channel-member.dto';
import { MailChannelMemberNotFoundException } from './error/mail-channel-member-not-found.exception';
import { UpdatedMailChannelMemberDto } from './dto/updated-mail-channel-member.dto';

@Injectable()
export class MailChannelMemberService {
  constructor(
    @InjectRepository(MailChannelMember)
    private readonly mailChannelMemberRepository: Repository<MailChannelMember>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailChannelMember[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailChannelMember = await this.mailChannelMemberRepository
      .createQueryBuilder('mailChannelMember')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailChannelMember;
  }

  async create(
    createMailChannelMemberDto: CreateMailChannelMemberDto,
  ): Promise<MailChannelMember> {
    const mailChannelMember = new MailChannelMember(createMailChannelMemberDto);
    return await this.mailChannelMemberRepository.save(mailChannelMember);
  }

  async findOne(id: number): Promise<MailChannelMember> {
    const mailChannelMember = await this.mailChannelMemberRepository
      .createQueryBuilder('mailChannelMember')
      .where('mailChannelMember.id = :id', { id })
      .getOne();
    if (!mailChannelMember) {
      throw new MailChannelMemberNotFoundException();
    }
    return mailChannelMember;
  }

  async updated(
    id: number,
    updatedMailChannelMemberDto: UpdatedMailChannelMemberDto,
  ): Promise<MailChannelMember> {
    const mailChannelMember = await this.mailChannelMemberRepository
      .createQueryBuilder('mailChannelMember')
      .where('mailChannelMember.id = :id', { id })
      .getOne();
    if (!mailChannelMember) {
      throw new MailChannelMemberNotFoundException();
    }
    Object.assign(mailChannelMember, updatedMailChannelMemberDto);
    return await this.mailChannelMemberRepository.save(mailChannelMember);
  }

  async deleted(id: number): Promise<void> {
    const mailChannelMember = await this.mailChannelMemberRepository
      .createQueryBuilder('mailChannelMember')
      .where('mailChannelMember.id = :id', { id })
      .getOne();
    if (!mailChannelMember) {
      throw new MailChannelMemberNotFoundException();
    }
    await this.mailChannelMemberRepository.softRemove(mailChannelMember);
    console.log('mailChannelMember Eliminado');
  }
}
