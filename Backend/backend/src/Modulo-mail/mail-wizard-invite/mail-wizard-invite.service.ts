import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailWizardInvite } from './entities/mail-wizard-invite.entity';
import { Repository } from 'typeorm';
import { CreateMailWizardInviteDto } from './dto/create-mail-wizard-invite.dto';
import { MailWizardInviteNotFoundException } from './error/mail-wizard-invite-not-found.exception';
import { UpdatedMailWizardInviteDto } from './dto/updated-mail-wizard-invite.dto';

@Injectable()
export class MailWizardInviteService {
  constructor(
    @InjectRepository(MailWizardInvite)
    private readonly mailWizardInviteRepository: Repository<MailWizardInvite>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailWizardInvite[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailWizardInvite = await this.mailWizardInviteRepository
      .createQueryBuilder('mailWizardInvite')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailWizardInvite;
  }

  async create(
    createMailWizardInviteDto: CreateMailWizardInviteDto,
  ): Promise<MailWizardInvite> {
    const mailWizardInvite = new MailWizardInvite(createMailWizardInviteDto);
    return await this.mailWizardInviteRepository.save(mailWizardInvite);
  }

  async findOne(id: number): Promise<MailWizardInvite> {
    const mailWizardInvite = await this.mailWizardInviteRepository
      .createQueryBuilder('mailWizardInvite')
      .where('mailWizardInvite.id = :id', { id })
      .getOne();
    if (!mailWizardInvite) {
      throw new MailWizardInviteNotFoundException();
    }
    return mailWizardInvite;
  }

  async updated(
    id: number,
    updatedMailWizardInviteDto: UpdatedMailWizardInviteDto,
  ): Promise<MailWizardInvite> {
    const mailWizardInvite = await this.mailWizardInviteRepository
      .createQueryBuilder('mailWizardInvite')
      .where('mailWizardInvite.id = :id', { id })
      .getOne();
    if (!mailWizardInvite) {
      throw new MailWizardInviteNotFoundException();
    }
    Object.assign(mailWizardInvite, updatedMailWizardInviteDto);
    return await this.mailWizardInviteRepository.save(mailWizardInvite);
  }

  async deleted(id: number): Promise<void> {
    const mailWizardInvite = await this.mailWizardInviteRepository
      .createQueryBuilder('mailWizardInvite')
      .where('mailWizardInvite.id = :id', { id })
      .getOne();
    if (!mailWizardInvite) {
      throw new MailWizardInviteNotFoundException();
    }
    await this.mailWizardInviteRepository.softRemove(mailWizardInvite);
    console.log('Mail Wizard Invite Eliminado');
  }
}
